package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.Admin;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @PostMapping("/login")
    public String login(@RequestBody AdminLoginRequest adminLoginRequest) {
        String username = adminLoginRequest.getUsername();
        String password = adminLoginRequest.getPassword();

        // Check if the provided credentials match the admin credentials
        if (username.equals(Admin.getUsername()) && password.equals(Admin.getPassword())) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }

    // You can add more methods for admin-related functionalities if needed
}

class AdminLoginRequest {
    private String username;
    private String password;

    // Add getters and setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}