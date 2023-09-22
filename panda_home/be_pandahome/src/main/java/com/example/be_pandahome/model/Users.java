package com.example.be_pandahome.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "password")
    private String password;
    @Column(name = "email")
    private String email;
    @Column(name = "verification_code")
    private Long verificationCode;
    @Column(name = "status")
    private Integer status;
    @Column(name = "create_time", columnDefinition = "TIMESTAMP DEFAULT now()")
    private LocalDateTime createTime;
    @OneToOne
    @JoinColumn(name = "id_role")
    private Role role;

    public Users() {
    }

    public Users(Long id, String userName, String password, String email, Long verificationCode, Integer status, Role role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.verificationCode = verificationCode;
        this.status = status;
        this.role = role;
    }

    public Users(Long id, String userName, String password, String email, Long verificationCode, Integer status, LocalDateTime createTime, Role role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.verificationCode = verificationCode;
        this.status = status;
        this.createTime = createTime;
        this.role = role;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(Long verificationCode) {
        this.verificationCode = verificationCode;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
