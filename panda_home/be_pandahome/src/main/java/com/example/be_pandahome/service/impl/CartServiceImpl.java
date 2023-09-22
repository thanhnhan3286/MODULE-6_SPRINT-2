package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.model.ShoppingCart;
import com.example.be_pandahome.model.products.Products;
import com.example.be_pandahome.repository.ICartRepository;
import com.example.be_pandahome.service.ICartService;
import com.example.be_pandahome.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IProductService productService;

    @Override
    public List<ShoppingCart> findAllByIdCustomer(Long id) {
        List<ShoppingCart> shoppingCartList = cartRepository.findAllByCustomerId(id);
        for (ShoppingCart shoppingCart : shoppingCartList) {
            Products products = productService.findById(shoppingCart.getProductId().getId());
            if (products.getQuantity() < 1) {
                this.cartRepository.delete(shoppingCart);
            } else if (shoppingCart.getQuantity() > products.getQuantity()) {
                shoppingCart.setQuantity(products.getQuantity());
                this.cartRepository.save(shoppingCart);
            }
        }
        return cartRepository.findAllByCustomerId(id);
    }

    @Override
    public ShoppingCart findByIdCustomerAndIdProduct(Long idCustomer, Long idProduct) {
        return cartRepository.findByIdCusAndIdPro(idCustomer, idProduct);
    }

    @Override
    public void add(ShoppingCart shoppingCart) {
        this.cartRepository.save(shoppingCart);
    }

    @Override
    public void deleteShoppingCart(ShoppingCart shoppingCart) {
        this.cartRepository.setStatusToTrue(shoppingCart.getId());
    }

    @Override
    public void setCartToTrueByCustomer(Long id, Long idCustomer) {
        this.cartRepository.setStatusToTrueByCustomer(id, idCustomer);
    }

    @Override
    public void setAllCartToTrueByCustomer(Long idCustomer) {
        this.cartRepository.setAllStatusToTrueByCustomer(idCustomer);
    }

    @Override
    public void delete(ShoppingCart shoppingCart) {
        this.cartRepository.delete(shoppingCart);
    }
}
