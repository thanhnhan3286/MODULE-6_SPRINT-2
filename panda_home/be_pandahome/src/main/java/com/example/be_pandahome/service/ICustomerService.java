package com.example.be_pandahome.service;

import com.example.be_pandahome.dto.CustomerDto;
import com.example.be_pandahome.model.Customers;

public interface ICustomerService {
    Boolean checkExistCustomer(String email);

    void createCustomer(CustomerDto customerDto, Long id);

    Customers findByUserName(String userName);

    void setFlagToFalse(String userName);
}
