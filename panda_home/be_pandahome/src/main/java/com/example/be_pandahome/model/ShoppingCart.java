package com.example.be_pandahome.model;

import com.example.be_pandahome.model.products.Products;

import javax.persistence.*;

@Entity(name = "shopping_cart")
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customerId;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products productId;
    @Column(name = "quantity", columnDefinition = "INT DEFAULT 1")
    private Integer quantity;
    @Column(name = "status_delete", columnDefinition = "BIT DEFAULT 0")
    private boolean statusDelete;

    public ShoppingCart() {
    }

    public ShoppingCart(Long id, Customers customerId, Products productId, Integer quantity, boolean statusDelete) {
        this.id = id;
        this.customerId = customerId;
        this.productId = productId;
        this.quantity = quantity;
        this.statusDelete = statusDelete;
    }

    public ShoppingCart(Customers customerId, Products productId, Integer quantity) {
        this.customerId = customerId;
        this.productId = productId;
        this.quantity = quantity;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customers getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Customers customerId) {
        this.customerId = customerId;
    }

    public Products getProductId() {
        return productId;
    }

    public void setProductId(Products productId) {
        this.productId = productId;
    }

    public boolean isStatusDelete() {
        return statusDelete;
    }

    public void setStatusDelete(boolean statusDelete) {
        this.statusDelete = statusDelete;
    }
}
