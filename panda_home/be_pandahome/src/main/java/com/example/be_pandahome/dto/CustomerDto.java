package com.example.be_pandahome.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Date;

public class CustomerDto {
    @NotBlank(message = "Chưa nhập họ tên khách hàng.")
    @Size(max = 100, min = 2, message = "Họ và tên phải hơn 2 ký tự và dưới 50 ký tự")
//    @Pattern(regexp = "^[\\p{Lu}][\\p{Ll}]*([\\s][\\p{Lu}][\\p{Ll}]*)*$", message = "Bạn phải viết hoa chữ cái đầu của từng từ, có khoảng trắng giữa các từ và không có ký tự đặc biệt")
    private String name;
    @NotBlank(message = "Chưa nhập số điện thoại")
    @Pattern(regexp = "^(\\+84|0)[1-9][0-9]{8}$", message = "Nhập theo định dạng +84xxxxxxxxx hoặc 0xxxxxxxxx với x là ký tự số")
    private String phoneNumber;
    @NotBlank(message = "Chưa nhập email.")
    @Pattern(regexp = "^\\w+@\\w+(.\\w+)$", message = "Nhập theo định dạng: xxx@xxx.xxx với x không phải là ký tự đặc biệt ")
    @Size(max = 50, min = 6, message = "Email tối đa 50 ký tự, ít nhất 6 ký tự")
    private String email;
    @NotBlank(message = "Chưa chọn giới tính.")
    @Size(max = 5, min = 2, message = "Chưa chọn giới tính.")
    private String gender;
    @NotBlank(message = "Chưa nhập ngày sinh.")
    private Date birthday;
    @NotBlank(message = "Chưa nhập mật khẩu")
//    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[0-9]).{6,20}$", message = "Mật khẩu phải từ 6 ký tự và ít hơn 20 ký tự, có chứa ký ự in hoa và ký tự số")
    private String password;
    @NotBlank(message = "Chưa nhập lại mật khẩu")
    private String passwordConfirm;
    @NotBlank(message = "Chưa nhập địa chỉ khách hàng.")
    private String address;
    private Long verificationCode;
    private Integer count;
    public CustomerDto() {
    }

    public CustomerDto(String email, Long verificationCode, Integer count) {
        this.email = email;
        this.verificationCode = verificationCode;
        this.count = count;
    }

    public CustomerDto(String name, String phoneNumber, String email, String gender, Date birthday, String password, String address) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.gender = gender;
        this.birthday = birthday;
        this.password = password;
        this.address = address;
    }

    public CustomerDto(String name, String phoneNumber, String email, String gender, Date birthday, String password, String passwordConfirm, String address) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.gender = gender;
        this.birthday = birthday;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.address = address;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Long getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(Long verificationCode) {
        this.verificationCode = verificationCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordConfirm() {
        return passwordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.passwordConfirm = passwordConfirm;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
