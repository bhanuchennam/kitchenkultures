package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.HomeChef;
import com.example.kitchenkultures.model.HomechefRegistartion;
import com.example.kitchenkultures.model.User;
import com.example.kitchenkultures.repository.HomeChefRegistrationRepository;
import com.example.kitchenkultures.repository.HomeChefRepository;
import com.example.kitchenkultures.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeChefLoginController {
    @Autowired
    private HomeChefRegistrationRepository homeChefRegistrationRepository;

    @PostMapping("/cheflogin")
    public ResponseEntity<Map<String, String>> userLogin(@RequestBody HomechefRegistartion loginUser) {
        try {
            Optional<HomechefRegistartion> homechefRegistartionOptional = homeChefRegistrationRepository.findByUserName(loginUser.getUserName());

            if (homechefRegistartionOptional.isPresent() && homechefRegistartionOptional.get().getPassword().equals(loginUser.getPassword())) {
                Map<String, String> response = new HashMap<>();
                response.put("message", "Login successful");
                return ResponseEntity.ok(response);
            } else {
                Map<String, String> response = new HashMap<>();
                response.put("error", "Invalid credentials");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        } catch (Exception e) {
            e.printStackTrace(); // Add this line to print the exception details to console

            Map<String, String> response = new HashMap<>();
            response.put("error", "An error occurred during login");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
