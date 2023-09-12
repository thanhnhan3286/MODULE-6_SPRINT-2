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

    @Query(nativeQuery = true, value = "SELECT * FROM products AS p\n" +
            "         LEFT JOIN product_type pt on p.product_type = pt.id\n" +
            "         LEFT JOIN category c on p.category = c.id\n" +
            "         WHERE p.name LIKE CONCAT('%',:name,'%')\n" +
            "           AND pt.name LIKE CONCAT('%',:type,'%')\n" +
            "           AND c.name LIKE CONCAT('%',:cate,'%')\n" +
            "           AND p.status_delete = 0 order by p.product_type")
    Page<Products> getAllProduct(Pageable page, @Param("name") String name, @Param("type")String type, @Param("cate")String cate);

    @Query(nativeQuery = true, value = "SELECT * FROM products AS p WHERE p.product_type = :id AND p.status_delete = 0")
    List<Products> getTheSamePro(@Param("id") Long id);
}
