package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.model.products.Image;
import com.example.be_pandahome.repository.IImageRepository;
import com.example.be_pandahome.service.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageServiceImpl implements IImageService {
    @Autowired
    private IImageRepository imageRepository;
    @Override
    public List<Image> getAllById(Long id) {
        return imageRepository.getAllById(id);
    }
}
