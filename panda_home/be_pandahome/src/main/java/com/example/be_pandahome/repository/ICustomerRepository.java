package com.example.be_pandahome.repository;

import com.example.be_pandahome.dto.CustomerDto;
import com.example.be_pandahome.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ICustomerRepository extends JpaRepository<Customers, Long> {
    @Query(nativeQuery = true, value = "select * from customers as c where c.email = :email and c.status_delete = 0")
    List<Customers> findAllByEmailAndStatusFalse(String email);

    @Modifying
    @Transactional
    @Query(value = "insert into customers(name,address,phone_number,email,birthday,gender,status_delete,id_user)" +
            " values (:#{#customerDto.name}, :#{#customerDto.address},:#{#customerDto.phoneNumber},:#{#customerDto.email}," +
            ":#{#customerDto.birthday},:#{#customerDto.gender},1,:idUser)", nativeQuery = true)
    void createCustomer(@Param("customerDto") CustomerDto customerDto, @Param("idUser") Long idUser);

    @Query(value = "SELECT * FROM customers as c where c.email = :userName", nativeQuery = true)
    Customers findByUserName(@Param("userName") String userName);

    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "update customers as c set c.status_delete = false where c.email = :email")
    void setStatusToFalse(@Param("email") String email);
}
