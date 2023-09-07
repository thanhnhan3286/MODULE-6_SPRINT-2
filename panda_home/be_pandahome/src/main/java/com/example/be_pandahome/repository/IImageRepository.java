package com.example.be_pandahome.repository;

import com.example.be_pandahome.model.products.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IImageRepository extends JpaRepository<Image, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM image_product AS i WHERE i.id_product = :id")
    List<Image> getAllById(@Param("id") Long id);
}
