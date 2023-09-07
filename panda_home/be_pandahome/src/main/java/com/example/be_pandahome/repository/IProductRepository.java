package com.example.be_pandahome.repository;

import com.example.be_pandahome.model.products.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface IProductRepository extends JpaRepository<Products, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM products as p where p.status_delete = 0  AND p.quantity > 0 order by p.create_time desc limit 4")
    List<Products> getTop4();

    @Query(nativeQuery = true, value = "SELECT * FROM products AS p WHERE p.id = :id AND p.status_delete = 0 LIMIT 1")
    Products findByIdAndStatusFalse(@Param("id") Long id);

    @Query(nativeQuery = true, value = "SELECT * FROM products AS p WHERE p.name LIKE CONCAT('%',:name,'%') AND p.status_delete = 0 order by p.product_type")
    Page<Products> getAllProduct(Pageable page, String name);
    @Query(nativeQuery = true, value = "SELECT * FROM products AS p WHERE p.product_type = :id AND p.status_delete = 0")
    List<Products> getTheSamePro(@Param("id") Long id);
}
