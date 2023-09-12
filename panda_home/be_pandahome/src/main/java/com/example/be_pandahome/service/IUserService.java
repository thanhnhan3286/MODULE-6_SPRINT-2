package com.example.be_pandahome.service;

import com.example.be_pandahome.dto.CustomerDto;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

public interface IUserService {
    boolean signUp(CustomerDto customerDto) throws MessagingException, UnsupportedEncodingException;
}
