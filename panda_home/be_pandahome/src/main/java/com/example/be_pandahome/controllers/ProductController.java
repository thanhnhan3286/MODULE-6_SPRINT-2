package com.example.be_pandahome.controllers;

import com.example.be_pandahome.model.products.Products;
import com.example.be_pandahome.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/all")
    public ResponseEntity<Page<Products>> getAll(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                 @RequestParam(value = "name", defaultValue = "") String name,
                                                 @RequestParam(value = "type", defaultValue = "") String type,
                                                 @RequestParam(value = "category", defaultValue = "") String category,
                                                 @RequestParam(value = "price", defaultValue = "") String price,
                                                 @RequestParam(value = "orderBy", defaultValue = "") String orderBy
    ) {
        Page<Products> productsPage = productService.getAllProduct(page, name, type, category, price, orderBy);
        if (productsPage == null || productsPage.isEmpty()) {
            return new ResponseEntity<>(productsPage,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(productsPage, HttpStatus.OK);
        }
    }

    @GetMapping("/top4")
    public ResponseEntity<List<Products>> listResponseEntity() {
        List<Products> productsList = productService.getTop4();
        if (productsList == null && productsList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(productsList, HttpStatus.OK);
        }
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Products> getProById(@PathVariable Long id) {
        Products product = productService.findById(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
    }

    @GetMapping("/same/{id}")
    public ResponseEntity<List<Products>> getSamePro(@PathVariable Long id) {
        List<Products> productsList = productService.getSamePro(id);
        if (productsList == null || productsList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(productsList, HttpStatus.OK);
        }
    }
}
