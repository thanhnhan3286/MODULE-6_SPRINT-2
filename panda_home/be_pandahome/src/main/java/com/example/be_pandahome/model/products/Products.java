package com.example.be_pandahome.model.products;

import javax.persistence.*;
import javax.print.attribute.standard.MediaSize;
import java.time.LocalDateTime;

@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "product_code")
    private String productCode;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private Long price;
    @Column(name = "image")
    private String image;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "description")
    private String description;
    @Column(name = "create_time", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createDate;
    @Column(name = "update_time", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime updateDate;
    @Column(name = "status_delete", columnDefinition = "BIT DEFAULT 0")
    private Boolean statusDelete;
    @ManyToOne
    @JoinColumn(name = "product_type")
    private ProductType productType;
    @ManyToOne
    @JoinColumn(name = "category")
    private Category category;

    public Products() {
    }

    public Products(Long id, String productCode, String name, Long price, String image, Integer quantity, String description, LocalDateTime createDate, LocalDateTime updateDate, Boolean statusDelete, ProductType productType, Category category) {
        this.id = id;
        this.productCode = productCode;
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
        this.description = description;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.statusDelete = statusDelete;
        this.productType = productType;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
