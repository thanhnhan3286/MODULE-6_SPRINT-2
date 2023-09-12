package com.example.be_pandahome.controllers;

import com.example.be_pandahome.config.JwtTokenUtil;
import com.example.be_pandahome.config.JwtUserDetails;
import com.example.be_pandahome.dto.CustomerDto;
import com.example.be_pandahome.reponse.JwtRequest;
import com.example.be_pandahome.reponse.JwtResponse;
import com.example.be_pandahome.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserServiceImpl userService;

    static class ErrorInfo {
        private String error;
        private String useName;

        public ErrorInfo(String error, String useName) {
            this.error = error;
            this.useName = useName;
        }

        public String getError() {
            return error;
        }

        public void setError(String error) {
            this.error = error;
        }

        public String getId() {
            return useName;
        }

        public void setId(String useName) {
            this.useName = useName;
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginAuthentication(@RequestBody JwtRequest authenticationRequest) throws Exception {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            GrantedAuthority authority = principal.getAuthorities().stream().findFirst().orElse(null);
            final String token = jwtTokenUtil.generateToken(principal.getUsername());
            return ResponseEntity.ok(new JwtResponse(token, principal.getUsername(), authority != null ? authority.getAuthority() : null));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Đăng nhập thất bại.");
        }
    }
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody CustomerDto customerDto) throws MessagingException, UnsupportedEncodingException {
        if (userService.signUp(customerDto)) {
            return ResponseEntity.ok(new JwtResponse(customerDto.getEmail()));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Đăng ký tài khoản không thành công");
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
