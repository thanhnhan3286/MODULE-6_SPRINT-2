package com.example.be_pandahome.service;

import com.example.be_pandahome.model.ShoppingCart;

import java.util.List;

public interface ICartService {
    List<ShoppingCart> findAllByIdCustomer(Long id);

    ShoppingCart findByIdCustomerAndIdProduct(Long id, Long idProduct);

    void add(ShoppingCart shoppingCart);

    void deleteShoppingCart(ShoppingCart shoppingCart);

    void setCartToTrueByCustomer(Long id, Long idCustomer);
    void setAllCartToTrueByCustomer( Long idCustomer);

    void delete(ShoppingCart shoppingCart);
}
