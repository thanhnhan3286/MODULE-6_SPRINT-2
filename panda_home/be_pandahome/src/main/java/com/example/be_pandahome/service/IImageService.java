package com.example.be_pandahome.service;

import com.example.be_pandahome.model.products.Image;

import java.util.List;

public interface IImageService {
    List<Image> getAllById(Long id);
}
