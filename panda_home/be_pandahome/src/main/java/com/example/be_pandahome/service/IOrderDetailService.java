package com.example.be_pandahome.service;

import com.example.be_pandahome.model.OrderDetail;

import java.util.List;

public interface IOrderDetailService {
    List<OrderDetail> findAllByOrder(Long id);

    OrderDetail save(OrderDetail orderDetail);
}
