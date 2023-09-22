package com.example.be_pandahome.model;

import com.example.be_pandahome.model.products.Products;

import javax.persistence.*;
import javax.print.attribute.standard.MediaSize;
import java.time.LocalDateTime;

@Entity
@Table(name = "order_detail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "price")
    private Long price;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "create_time", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createDate;
    @Column(name = "update_time", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime updateDate;
    @Column(name = "status_delete")
    private Boolean statusDelete;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order orderId;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products productId;

    public OrderDetail() {
    }

    public OrderDetail(Long price, Integer quantity, Order orderId, Products productId) {
        this.price = price;
        this.quantity = quantity;
        this.orderId = orderId;
        this.productId = productId;
    }

    public OrderDetail(Long price, Integer quantity, LocalDateTime createDate, LocalDateTime updateDate, Boolean statusDelete, Order orderId, Products productId) {
        this.price = price;
        this.quantity = quantity;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.statusDelete = statusDelete;
        this.orderId = orderId;
        this.productId = productId;
    }

    public OrderDetail(Long id, Long price, Integer quantity, LocalDateTime createDate, LocalDateTime updateDate, Boolean statusDelete, Order orderId, Products productId) {
        this.id = id;
        this.price = price;
        this.quantity = quantity;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.statusDelete = statusDelete;
        this.orderId = orderId;
        this.productId = productId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }

    public Boolean getStatusDelete() {
        return statusDelete;
    }

    public void setStatusDelete(Boolean statusDelete) {
        this.statusDelete = statusDelete;
    }

    public Order getOrderId() {
        return orderId;
    }

    public void setOrderId(Order orderId) {
        this.orderId = orderId;
    }

    public Products getProductId() {
        return productId;
    }

    public void setProductId(Products productId) {
        this.productId = productId;
    }
}
