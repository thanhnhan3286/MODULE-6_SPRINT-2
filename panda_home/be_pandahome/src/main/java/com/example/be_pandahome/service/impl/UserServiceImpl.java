package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.config.JwtUserDetails;
import com.example.be_pandahome.dto.CustomerDto;
import com.example.be_pandahome.model.Users;
import com.example.be_pandahome.repository.IUserRepository;
import com.example.be_pandahome.service.ICustomerService;
import com.example.be_pandahome.service.IUserService;
import javafx.util.converter.LocalDateTimeStringConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Random;

@Service
public class UserServiceImpl implements IUserService, UserDetailsService {
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private EmailService emailService;

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

    @Override
    @Transactional
    public boolean signUp(CustomerDto customerDto) throws MessagingException, UnsupportedEncodingException {
        String email = customerDto.getEmail();
        List<Users> usersList = userRepository.getAllByUserNameAndStatus2(email);
        if (usersList.size() > 0) {
            this.userRepository.setAllStatusToTrue();
        }
        Boolean checkExistUser = checkExistUser(email);
        Boolean checkExistCustomer = customerService.checkExistCustomer(email);
        if (checkExistUser || checkExistCustomer) {
            return false;
        }
        String encoderPassword = passwordEncoder.encode(customerDto.getPassword());
        Random random = new Random();
        int randomCode = random.nextInt(900000) + 100000;
        this.userRepository.saveUser(customerDto.getEmail(), encoderPassword, randomCode);
        Users usersNew = userRepository.getByUserNameAndStatus2(email);
        if (usersNew == null) {
            return false;
        }
        this.customerService.createCustomer(customerDto, usersNew.getId());
        this.emailService.sendMailSignup(email, randomCode);
        return true;
    }

    @Override
    public boolean checkCode(CustomerDto customerDto) {
//        LocalDateTime dateTime = LocalDateTime.now();
        Users usersCheck = userRepository.getByUserNameAndStatus2(customerDto.getEmail());
        if (usersCheck == null) {
            return false;
        }
        boolean check = Objects.equals(customerDto.getVerificationCode(), usersCheck.getVerificationCode());
        if (customerDto.getCount() <= 3 && check) {
            this.userRepository.setCodeToFalse(usersCheck.getId());
            this.userRepository.setStatusToFalse(usersCheck.getId());
            this.customerService.setFlagToFalse(usersCheck.getUserName());
            return true;
        }else if(customerDto.getCount() >= 3 && !check) {
            this.userRepository.setCodeToFalse(usersCheck.getId());
            this.userRepository.setStatusToTrue(usersCheck.getId());
        }
        return check;
    }

    private Boolean checkExistUser(String email) {
        List<Users> usersList = userRepository.getAllByUserNameAndStatusFalse(email);
        return usersList.size() > 0;
    }
}
