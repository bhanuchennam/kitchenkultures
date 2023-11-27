package com.example.kitchenkultures.service;

import com.example.kitchenkultures.model.HomechefRegistartion;
import com.example.kitchenkultures.repository.HomeChefRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeChefRegistraionService {

    @Autowired
    HomeChefRegistrationRepository homeChefRegistrationRepository;


    public String deleteHomeChef(String userName) {
        homeChefRegistrationRepository.deleteByuserName(userName);
        return "deleted successfully";
    }

    public List<HomechefRegistartion> listhomechefs() {
        return homeChefRegistrationRepository.findAll();
    }
}
