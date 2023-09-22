package com.example.be_pandahome.controllers;

import com.example.be_pandahome.config.JwtTokenUtil;
import com.example.be_pandahome.model.Customers;
import com.example.be_pandahome.model.ShoppingCart;
import com.example.be_pandahome.model.products.Products;
import com.example.be_pandahome.service.ICartService;
import com.example.be_pandahome.service.ICustomerService;
import com.example.be_pandahome.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IProductService productService;

    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<List<ShoppingCart>> getAll(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        if (token.equals("null")) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        String userName = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = customerService.findByUserName(userName);
        if (customers == null) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        List<ShoppingCart> shoppingCarts = cartService.findAllByIdCustomer(customers.getId());
        return new ResponseEntity<>(shoppingCarts, HttpStatus.OK);
    }

    @PostMapping("/add")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<?> add(HttpServletRequest httpServletRequest,
                                 @RequestParam(value = "quantity", defaultValue = "1") Integer quantity,
                                 @RequestParam(value = "idProduct") Long idProduct) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        if (token.equals("null")) {
            return new ResponseEntity<>("Bạn chưa đăng nhập.", HttpStatus.OK);
        }
        String userName = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = customerService.findByUserName(userName);
        Products products = productService.findById(idProduct);
        ShoppingCart shoppingCart = cartService.findByIdCustomerAndIdProduct(customers.getId(), idProduct);
        if (shoppingCart != null) {
            Integer newQuantity = shoppingCart.getQuantity() + quantity;
            if (newQuantity > 0) {
                if (products.getQuantity() < newQuantity) {
                    return new ResponseEntity<>("Số lượng sản phẩm trong kho không đủ.", HttpStatus.OK);
                } else {
                    shoppingCart.setQuantity(newQuantity);
                    cartService.add(shoppingCart);
                    return new ResponseEntity<>("Đã chỉnh sửa số lượng", HttpStatus.OK);
                }
            } else {
                this.cartService.deleteShoppingCart(shoppingCart);
                return new ResponseEntity<>("Đã xóa sản phẩm", HttpStatus.OK);
            }
        } else {
            ShoppingCart newShoppingCart = new ShoppingCart(customers, products, quantity);
            this.cartService.add(newShoppingCart);
            return new ResponseEntity<>("Đã thêm mới sản phẩm", HttpStatus.OK);
        }
    }

    @PostMapping("/delete")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<?> deleteCart(HttpServletRequest httpServletRequest,
                                        @RequestParam(value = "id") Long id) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        if (token.equals("null")) {
            return new ResponseEntity<>("Bạn chưa đăng nhập.", HttpStatus.BAD_REQUEST);
        }
        String userName = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = customerService.findByUserName(userName);
        this.cartService.setCartToTrueByCustomer(id, customers.getId());
        return new ResponseEntity<>("Deleted", HttpStatus.OK);
    }

    @PostMapping("/deleteAll")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER','ROLE_ADMIN')")
    public ResponseEntity<?> deleteAllCart(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        if (token.equals("null")) {
            return new ResponseEntity<>("Bạn chưa đăng nhập.", HttpStatus.BAD_REQUEST);
        }
        String userName = jwtTokenUtil.getUsernameFromToken(token);
        Customers customers = customerService.findByUserName(userName);
        this.cartService.setAllCartToTrueByCustomer(customers.getId());
        return new ResponseEntity<>("Deleted", HttpStatus.OK);
    }
}
