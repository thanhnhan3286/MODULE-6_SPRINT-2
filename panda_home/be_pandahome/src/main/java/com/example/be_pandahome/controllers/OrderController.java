package com.example.be_pandahome.controllers;

import com.example.be_pandahome.config.JwtTokenUtil;
import com.example.be_pandahome.model.Customers;
import com.example.be_pandahome.model.Order;
import com.example.be_pandahome.model.OrderDetail;
import com.example.be_pandahome.service.ICustomerService;
import com.example.be_pandahome.service.IOrderDetailService;
import com.example.be_pandahome.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IOrderDetailService orderDetailService;
    @GetMapping()
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<List<Order>> getAllByCustomer(HttpServletRequest httpServletRequest){
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        if (token.equals("null")) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        String userName = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = customerService.findByUserName(userName);
        if (customers == null) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        List<Order> orderList = orderService.getAllByCustomer(customers);
        return new ResponseEntity<>(orderList,HttpStatus.OK);
    }
    @GetMapping("/detail")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<List<OrderDetail>> getAllByOrder(@RequestParam("id") Long id){
        List<OrderDetail> orderDetailList = orderDetailService.findAllByOrder(id);
        if(orderDetailList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(orderDetailList,HttpStatus.OK);
        }
    }
    @PostMapping("/create")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<?> createOrderAndOrderDetail(HttpServletRequest httpServletRequest, @RequestBody Order order) throws MessagingException, UnsupportedEncodingException {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        if (token.equals("null")) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        String userName = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = customerService.findByUserName(userName);
        if (customers == null) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        if(order == null){
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            boolean check = orderService.createOrderAndOrderTail(order,customers);
            return new ResponseEntity<>(check,HttpStatus.OK);
        }
    }
}
