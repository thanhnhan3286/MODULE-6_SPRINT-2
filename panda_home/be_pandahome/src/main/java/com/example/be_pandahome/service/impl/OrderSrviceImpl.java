package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.model.Customers;
import com.example.be_pandahome.model.Order;
import com.example.be_pandahome.model.OrderDetail;
import com.example.be_pandahome.model.ShoppingCart;
import com.example.be_pandahome.model.products.Products;
import com.example.be_pandahome.repository.IOrderRepository;
import com.example.be_pandahome.service.ICartService;
import com.example.be_pandahome.service.IOrderDetailService;
import com.example.be_pandahome.service.IOrderService;
import com.example.be_pandahome.service.IProductService;
import javafx.util.converter.LocalDateTimeStringConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Service
public class OrderSrviceImpl implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private ICartService cartService;
    @Autowired
    private IOrderDetailService orderDetailService;
    @Autowired
    private IProductService productService;
    @Autowired
    private EmailService emailService;

    @Override
    public List<Order> getAllByCustomer(Customers customers) {
        return orderRepository.findAllByCustomer(customers.getId());
    }

    @Override
    @Transactional
    public boolean createOrderAndOrderTail(Order order, Customers customers) throws MessagingException, UnsupportedEncodingException {
        LocalDateTime localDateTime = LocalDateTime.now();
        Random random = new Random();
        int randomCode = random.nextInt(900000) + 100000;
        String orderCode = "PD" + customers.getId() + "-" + randomCode;
        Long cost = 0L;
        if (order.getTotalPrice() <= 15000000) {
            cost = (long) (order.getTotalPrice() * 0.07);
        }
        Order orderToSave = new Order(orderCode, order.getConsigneeName(),
                order.getPhoneNumber(), order.getDeliveryAddress(),
                order.getTotalPrice() + cost, customers,
                order.getNote(), localDateTime,
                0, cost);
        this.orderRepository.save(orderToSave);
        Order orderNew = orderRepository.findByOrderCode(orderCode);
        if (orderNew == null) {
            createOrderAndOrderTail(order, customers);
        }
        List<ShoppingCart> shoppingCartList = cartService.findAllByIdCustomer(customers.getId());
        for (int i = 0; i < shoppingCartList.size(); i++) {
            LocalDateTime localDateTime1 = LocalDateTime.now();
            OrderDetail orderDetail = new OrderDetail(
                    shoppingCartList.get(i).getProductId().getPrice(),
                    shoppingCartList.get(i).getQuantity(),
                    localDateTime1, localDateTime1,
                    false, orderNew,
                    shoppingCartList.get(i).getProductId());
            this.orderDetailService.save(orderDetail);
            Products products = productService.findById(shoppingCartList.get(i).getProductId().getId());
            Integer quantityNew = products.getQuantity() - shoppingCartList.get(i).getQuantity();
            products.setQuantity(quantityNew);
            this.productService.save(products);
            this.cartService.delete(shoppingCartList.get(i));
        }
        List<OrderDetail> orderDetailList = orderDetailService.findAllByOrder(order.getId());
        this.emailService.sendMailOrder(customers.getEmail(), orderNew);
        return true;
    }
}
