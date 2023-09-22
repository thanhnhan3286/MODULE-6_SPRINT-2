package com.example.be_pandahome.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "email")
    private String email;
    @Column(name = "birthday")
    private Date birthday;
    @Column(name = "gender")
    private String gender;
    @Column(name = "create_time", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createDate;
    @Column(name = "update_time", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime updateDate;
    @OneToOne
    @JoinColumn(name = "id_user")
    private Users idUser;
    @Column(name = "status_delete", columnDefinition = "BIT DEFAULT 0")
    private Boolean statusDelete;

    public Customers() {
    }

    public Customers(Long id, String name, String address, String phoneNumber, String email, Date birthday, String gender, LocalDateTime createDate, LocalDateTime updateDate, Users idUser) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.idUser = idUser;
    }

    public Customers(Long id, String name, String address, String phoneNumber, String email, Date birthday, String gender, LocalDateTime createDate, LocalDateTime updateDate, Users idUser, Boolean statusDelete) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.idUser = idUser;
        this.statusDelete = statusDelete;
    }

    public Boolean getStatusDelete() {
        return statusDelete;
    }

    public void setStatusDelete(Boolean statusDelete) {
        this.statusDelete = statusDelete;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
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

    public Users getIdUser() {
        return idUser;
    }

    public void setIdUser(Users idUser) {
        this.idUser = idUser;
    }
}
