package com.example.be_pandahome.repository;

import com.example.be_pandahome.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    @Query(value = "SELECT * FROM order_detail AS od WHERE od.order_id = :id", nativeQuery = true)
    List<OrderDetail> findAllByOrder(@Param("id") Long id);
}
