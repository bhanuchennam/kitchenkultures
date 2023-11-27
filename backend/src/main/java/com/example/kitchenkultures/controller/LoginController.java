package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.User;
import com.example.kitchenkultures.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

// LoginController.java

// LoginController.java
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    // Update the response type to ResponseEntity<Map<String, String>>
    @PostMapping("/userlogin")
    public ResponseEntity<Map<String, String>> userLogin(@RequestBody User loginUser) {
        Optional<User> userOptional = userRepository.findByUsername(loginUser.getUsername());

        if (userOptional.isPresent() && userOptional.get().getPassword().equals(loginUser.getPassword())) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login successful");
            return ResponseEntity.ok(response);
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @GetMapping("/get-username")
    public String getUsername(User user) {
        // Get the username from the authenticated user
        return user.getUsername();
    }

}
