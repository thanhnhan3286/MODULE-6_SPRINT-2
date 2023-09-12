package com.example.be_pandahome.service;

import com.example.be_pandahome.model.products.Products;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IProductService {
    List<Products> getTop4();

    Products findById(Long id);

    Page<Products> getAllProduct(Integer page, String name, String type, String category);

    List<Products> getSamePro(Long id);
}
