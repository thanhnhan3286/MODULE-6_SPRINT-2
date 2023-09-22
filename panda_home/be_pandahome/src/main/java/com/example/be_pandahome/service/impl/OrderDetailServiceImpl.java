package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.model.OrderDetail;
import com.example.be_pandahome.repository.IOrderDetailRepository;
import com.example.be_pandahome.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Override
    public List<OrderDetail> findAllByOrder(Long id) {
        return orderDetailRepository.findAllByOrder(id);
    }

    @Override
    public OrderDetail save(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }
}
