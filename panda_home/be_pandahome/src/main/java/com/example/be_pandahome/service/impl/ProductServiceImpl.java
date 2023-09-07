package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.model.products.Products;
import com.example.be_pandahome.repository.IProductRepository;
import com.example.be_pandahome.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
    public Page<Products> getAllProduct(Integer page, String name) {
        return productRepository.getAllProduct(PageRequest.of(page, 4), name);
    }

    @Override
    public List<Products> getSamePro(Long id) {
        return productRepository.getTheSamePro(id);
    }
}
