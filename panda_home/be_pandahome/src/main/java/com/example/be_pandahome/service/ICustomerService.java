package com.example.be_pandahome.service;

import com.example.be_pandahome.dto.CustomerDto;

public interface ICustomerService {
    Boolean checkExistCustomer(String email);

    void createCustomer(CustomerDto customerDto, Long id);
}
