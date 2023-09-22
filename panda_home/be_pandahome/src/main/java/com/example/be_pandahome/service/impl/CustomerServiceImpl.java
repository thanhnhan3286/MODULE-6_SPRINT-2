package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.dto.CustomerDto;
import com.example.be_pandahome.model.Customers;
import com.example.be_pandahome.repository.ICustomerRepository;
import com.example.be_pandahome.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;
    @Override
    public Boolean checkExistCustomer(String email) {
        List<Customers> customersList = customerRepository.findAllByEmailAndStatusFalse(email);
        return customersList.size() > 0;
    }

    @Override
    public void createCustomer(CustomerDto customerDto, Long idUser) {
        this.customerRepository.createCustomer(customerDto,idUser);
    }

    @Override
    public Customers findByUserName(String userName) {
        return customerRepository.findByUserName(userName);
    }

    @Override
    public void setFlagToFalse(String userName) {
        this.customerRepository.setStatusToFalse(userName);
    }
}
