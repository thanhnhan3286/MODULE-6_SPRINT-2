package com.example.be_pandahome.service;

import com.example.be_pandahome.model.Customers;
import com.example.be_pandahome.model.Order;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;

public interface IOrderService {
    List<Order> getAllByCustomer(Customers customers);

    boolean createOrderAndOrderTail(Order order, Customers customers) throws MessagingException, UnsupportedEncodingException;
}
