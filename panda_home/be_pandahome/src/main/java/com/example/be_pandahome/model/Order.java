package com.example.be_pandahome.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "order_code")
    private String orderCode;
    @Column(name = "delivery_address")
    private String deliveryAress;
    @Column(name = "total_price")
    private Long totalPricce;
    @Column(name = "create_date", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createDate;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customer;

    public Order() {
    }

    public Order(Long id, String orderCode, String deliveryAress, Long totalPricce, LocalDateTime createDate, Customers customer) {
        this.id = id;
        this.orderCode = orderCode;
        this.deliveryAress = deliveryAress;
        this.totalPricce = totalPricce;
        this.createDate = createDate;
        this.customer = customer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public String getDeliveryAress() {
        return deliveryAress;
    }

    public void setDeliveryAress(String deliveryAress) {
        this.deliveryAress = deliveryAress;
    }

    public Long getTotalPricce() {
        return totalPricce;
    }

    public void setTotalPricce(Long totalPricce) {
        this.totalPricce = totalPricce;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public Customers getCustomer() {
        return customer;
    }

    public void setCustomer(Customers customer) {
        this.customer = customer;
    }
}
