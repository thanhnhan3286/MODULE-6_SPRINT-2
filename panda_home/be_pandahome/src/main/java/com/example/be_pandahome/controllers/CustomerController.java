package com.example.be_pandahome.controllers;

import com.example.be_pandahome.config.JwtTokenUtil;
import com.example.be_pandahome.model.Customers;
import com.example.be_pandahome.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private ICustomerService customerService;
    @GetMapping()
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER', 'ROLE_ADMIN')")
    public ResponseEntity<Customers> getUser (HttpServletRequest httpServletRequest){
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
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }
}
