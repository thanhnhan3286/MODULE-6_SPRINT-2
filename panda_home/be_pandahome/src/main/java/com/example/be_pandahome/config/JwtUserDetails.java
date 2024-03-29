package com.example.be_pandahome.config;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class JwtUserDetails implements UserDetails {

    private Long id;
    private String username;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtUserDetails(Long id, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    // Các phương thức khác của UserDetails

    @Override
    public boolean isAccountNonExpired() {
        // Xác định logic kiểm tra tài khoản có hết hạn hay không
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // Xác định logic kiểm tra tài khoản có bị khóa hay không
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // Xác định logic kiểm tra thông tin xác thực (credentials) có hết hạn hay không
        return true;
    }

    @Override
    public boolean isEnabled() {
        // Xác định logic kiểm tra tài khoản có được kích hoạt hay không
        return true;
    }

    public Long getId() {
        return id;
    }
}
