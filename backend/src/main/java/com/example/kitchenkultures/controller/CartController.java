package com.example.kitchenkultures.controller;

import java.util.List;
import java.util.Optional;

import com.example.kitchenkultures.model.Cart;
import com.example.kitchenkultures.model.CartItem;
import com.example.kitchenkultures.repository.CartItemRepository;
import com.example.kitchenkultures.repository.CartRepository;
import com.example.kitchenkultures.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


// CartController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/orders")
public class CartController {

    @Autowired
    CartItemRepository cartItemRepository;

    @PostMapping
    public ResponseEntity<String> placeOrder(@RequestBody List<CartItem> cartItems) {
        // Process the order...
        System.out.println("Received cart items: " + cartItems);
        cartItemRepository.saveAll(cartItems);

        return ResponseEntity.ok("Order placed successfully!");
    }

    @GetMapping("/getorders")
    public ResponseEntity<List<CartItem>> getAllOrders() {
        List<CartItem> cartItems = cartItemRepository.findAll();
        return ResponseEntity.ok(cartItems);
    }

    public ResponseEntity<List<CartItem>> getOrdersByUsername(@RequestParam String userName) {
        List<CartItem> cartItems = cartItemRepository.findByUserName(userName);
        return ResponseEntity.ok(cartItems);
    }

}
