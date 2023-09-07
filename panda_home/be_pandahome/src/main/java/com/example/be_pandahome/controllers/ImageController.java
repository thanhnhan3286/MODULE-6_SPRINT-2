package com.example.be_pandahome.controllers;

import com.example.be_pandahome.model.products.Image;
import com.example.be_pandahome.service.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/image")
public class ImageController {
    @Autowired
    private IImageService imageService;
    @GetMapping("/{id}")
    public ResponseEntity<List<Image>> getListImage(@PathVariable("id") Long id){
        List<Image> imageList = imageService.getAllById(id);
        if(imageList==null || imageList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(imageList,HttpStatus.OK);
        }
    }
}
