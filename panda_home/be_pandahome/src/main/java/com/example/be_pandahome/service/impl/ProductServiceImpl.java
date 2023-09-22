package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.model.products.Products;
import com.example.be_pandahome.repository.IProductRepository;
import com.example.be_pandahome.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Products> getTop4() {
        return productRepository.getTop4();
    }

    @Override
    public Products findById(Long id) {
        return productRepository.findByIdAndStatusFalse(id);
    }

    @Override
    public Page<Products> getAllProduct(Integer page, String name, String type, String category, String price, String orderBy) {
        Sort sort = checkSort(orderBy);
        switch (price) {
            case "1":
                return productRepository.getAllProduct(PageRequest.of(page, 4, sort), name, type, category, "0", "10000000");
            case "2":
                return productRepository.getAllProduct(PageRequest.of(page, 4, sort), name, type, category, "10000000", "20000000");
            case "3":
                return productRepository.getAllProduct(PageRequest.of(page, 4, sort), name, type, category, "20000000", "50000000");
            case "4":
                return productRepository.getAllProduct(PageRequest.of(page, 4, sort), name, type, category, "50000000", "1000000000000");
            default:
                return productRepository.getAllProduct(PageRequest.of(page, 4, sort), name, type, category, "0", "10000000000000");
        }
    }

    public Sort checkSort(String sortBy) {
        Sort sort;
        switch (sortBy) {
            case "new":
                sort = Sort.by("id").descending();
                break;
            case "a-z":
                sort = Sort.by("name").ascending();
                break;
            case "z-a":
                sort = Sort.by("name").descending();
                break;
            case "priceAscending":
                sort = Sort.by("price").ascending();
                break;
            case "priceDescending":
                sort = Sort.by("price").descending();
                break;
            default:
                sort = Sort.by("product_type").ascending();
                break;
        }
        return sort;
    }

    @Override
    public List<Products> getSamePro(Long id) {
        return productRepository.getTheSamePro(id);
    }

    @Override
    public void save(Products products) {
        this.productRepository.save(products);
    }
}
