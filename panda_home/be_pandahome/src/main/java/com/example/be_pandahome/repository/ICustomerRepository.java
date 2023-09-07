package com.example.be_pandahome.repository;

import com.example.be_pandahome.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customers, Long> {
}
