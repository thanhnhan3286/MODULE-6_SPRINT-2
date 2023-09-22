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
    @Column(name = "consignee_name")
    private String consigneeName;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "delivery_address")
    private String deliveryAddress;
    @Column(name = "total_price")
    private Long totalPrice;
    @Column(name = "deposit")
    private Long deposit;
    @Column(name = "shipping_cost")
    private Long shippingCost;
    @Column(name = "note", columnDefinition = "TEXT")
    private String note;
    @Column(name = "create_date", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createDate;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customer;
    @Column(name = "status")
    private Integer status;

    public Order() {
    }

    public Order(String consigneeName, String phoneNumber, String deliveryAddress, Long totalPrice, String note) {
        this.consigneeName = consigneeName;
        this.phoneNumber = phoneNumber;
        this.deliveryAddress = deliveryAddress;
        this.totalPrice = totalPrice;
        this.note = note;
    }

    public Order(Long id, String orderCode, String deliveryAddress, Long totalPrice, LocalDateTime createDate, Customers customer) {
        this.id = id;
        this.orderCode = orderCode;
        this.deliveryAddress = deliveryAddress;
        this.totalPrice = totalPrice;
        this.createDate = createDate;
        this.customer = customer;
    }

    public Order( String orderCode, String consigneeName, String phoneNumber, String deliveryAddress, Long totalPrice, Customers customer, String note, LocalDateTime createDate, Integer status, Long shippingCost) {
        this.orderCode = orderCode;
        this.consigneeName = consigneeName;
        this.phoneNumber = phoneNumber;
        this.deliveryAddress = deliveryAddress;
        this.totalPrice = totalPrice;
        this.customer = customer;
        this.note = note;
        this.createDate = createDate;
        this.status = status;
        this.shippingCost = shippingCost;
    }

    public Order(Long id, String orderCode, String consigneeName, String phoneNumber, String deliveryAddress, Long totalPrice, Long deposit, Long shippingCost, String note, LocalDateTime createDate, Customers customer) {
        this.id = id;
        this.orderCode = orderCode;
        this.consigneeName = consigneeName;
        this.phoneNumber = phoneNumber;
        this.deliveryAddress = deliveryAddress;
        this.totalPrice = totalPrice;
        this.deposit = deposit;
        this.shippingCost = shippingCost;
        this.note = note;
        this.createDate = createDate;
        this.customer = customer;
    }

    public Order(Long id, String orderCode, String consigneeName, String phoneNumber, String deliveryAddress, Long totalPrice, Long deposit, Long shippingCost, String note, LocalDateTime createDate, Customers customer, Integer status) {
        this.id = id;
        this.orderCode = orderCode;
        this.consigneeName = consigneeName;
        this.phoneNumber = phoneNumber;
        this.deliveryAddress = deliveryAddress;
        this.totalPrice = totalPrice;
        this.deposit = deposit;
        this.shippingCost = shippingCost;
        this.note = note;
        this.createDate = createDate;
        this.customer = customer;
        this.status = status;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Long getDeposit() {
        return deposit;
    }

    public void setDeposit(Long deposit) {
        this.deposit = deposit;
    }

    public Long getShippingCost() {
        return shippingCost;
    }

    public void setShippingCost(Long shippingCost) {
        this.shippingCost = shippingCost;
    }

    public String getConsigneeName() {
        return consigneeName;
    }

    public void setConsigneeName(String consigneeName) {
        this.consigneeName = consigneeName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public Long getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Long totalPrice) {
        this.totalPrice = totalPrice;
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
