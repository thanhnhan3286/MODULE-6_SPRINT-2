package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.config.JwtUserDetails;
import com.example.be_pandahome.model.Users;
import com.example.be_pandahome.repository.IUserRepository;
import com.example.be_pandahome.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements IUserService, UserDetailsService {
    @Autowired
    private IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepository.getByUserNameAndStatusFalse(username);
        if (user == null) {
            throw new UsernameNotFoundException("Không tìm thấy tài khoản với tên đăng nhập là: " + username);
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        String role = user.getRole().getRoleName();
        authorities.add(new SimpleGrantedAuthority(role));
        return new JwtUserDetails(user.getId(), user.getUserName(), user.getPassword(), authorities);
    }
}
