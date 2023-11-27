package com.example.kitchenkultures.controller;

// RegistrationController.java
import com.example.kitchenkultures.model.User;
import com.example.kitchenkultures.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RegistrationController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        // Save the user to the database
        userRepository.save(user);

        return "Registration successful!";
    }

    @GetMapping("/getusers")
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @DeleteMapping("/deleteuser/{id}")
    public String deleteUsers(@PathVariable Long id){
        userRepository.deleteById(id);
        return "user deleted";
    }
}
