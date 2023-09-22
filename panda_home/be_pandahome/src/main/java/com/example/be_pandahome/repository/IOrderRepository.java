package com.example.be_pandahome.repository;

import com.example.be_pandahome.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderRepository extends JpaRepository<Order, Long> {
    @Query(value = "SELECT * FROM orders AS o WHERE o.customer_id = :idCustomer ORDER BY o.id DESC ", nativeQuery = true)
    List<Order> findAllByCustomer(@Param("idCustomer") Long idCustomer);
    @Query(value = "SELECT * FROM orders AS o WHERE o.order_code = :orderCode", nativeQuery = true)
    Order findByOrderCode(@Param("orderCode") String orderCode);
}
