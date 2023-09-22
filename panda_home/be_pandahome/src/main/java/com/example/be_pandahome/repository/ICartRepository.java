package com.example.be_pandahome.repository;

import com.example.be_pandahome.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICartRepository extends JpaRepository<ShoppingCart, Long> {
    @Query(value = "SELECT * FROM shopping_cart AS sc WHERE sc.customer_id = :id AND sc.status_delete = 0 ORDER BY sc.id DESC", nativeQuery = true)
    List<ShoppingCart> findAllByCustomerId(@Param("id") Long id);

    @Query(value = "SELECT * FROM shopping_cart AS sc WHERE sc.customer_id = :idCustomer AND sc.product_id = :idProduct AND sc.status_delete = 0", nativeQuery = true)
    ShoppingCart findByIdCusAndIdPro(@Param("idCustomer") Long idCustomer, @Param("idProduct") Long idProduct);

    @Modifying
    @Transactional
    @Query(value = "UPDATE shopping_cart SET status_delete = 1 WHERE id = :id AND status_delete = 0", nativeQuery = true)
    void setStatusToTrue(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE shopping_cart SET status_delete = 1 WHERE id = :id AND customer_id = :idCustomer AND status_delete = 0", nativeQuery = true)
    void setStatusToTrueByCustomer(@Param("id") Long id, @Param("idCustomer") Long idCustomer);

    @Modifying
    @Transactional
    @Query(value = "UPDATE shopping_cart SET status_delete = 1 WHERE customer_id = :idCustomer AND status_delete = 0", nativeQuery = true)
    void setAllStatusToTrueByCustomer(Long idCustomer);
}
