package com.example.kitchenkultures.controller;

// SellerController.java

import com.example.kitchenkultures.model.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/seller")
public class SellerController {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        // Implement your login logic here
        // You can use Spring Security for more advanced authentication
        return ResponseEntity.ok("Login successful");
    }
}

