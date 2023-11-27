package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.HomeChef;
import com.example.kitchenkultures.model.HomechefRegistartion;
import com.example.kitchenkultures.repository.HomeChefRegistrationRepository;
import com.example.kitchenkultures.repository.HomeChefRepository;
import com.example.kitchenkultures.service.HomeChefRegistraionService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeChefRegistrationController {
    @Autowired
    private HomeChefRegistrationRepository homeChefRegistrationRepository;

    @PostMapping("/homechefregister")
    public String registerUser(@RequestBody HomechefRegistartion homechefRegistartion) {
        // Save the user to the database
        homeChefRegistrationRepository.save(homechefRegistartion);

        return "Registration successful!";
    }

    @DeleteMapping("/deletehomechefbyid/{userName}")
    @Transactional
    public String deleteHomeChef(@PathVariable String userName){
        homeChefRegistrationRepository.deleteByuserName(userName);
        return "deleted successfully";
    }

    @GetMapping("/gethomechefs")
    public List<HomechefRegistartion> listhomechefs(){
        return homeChefRegistrationRepository.findAll();
    }


}
