package com.example.be_pandahome.model.products;

import javax.persistence.*;

@Entity
@Table(name = "image_product")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "url")
    private String url;
    @ManyToOne
    @JoinColumn(name = "id_product")
    private Products product;

    public Image(Long id, String url, Products product) {
        this.id = id;
        this.url = url;
        this.product = product;
    }

    public Image() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }
}
