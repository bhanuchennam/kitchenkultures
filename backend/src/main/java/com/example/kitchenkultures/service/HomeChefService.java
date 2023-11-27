package com.example.kitchenkultures.service;

import com.example.kitchenkultures.model.Dish;
import com.example.kitchenkultures.model.HomeChef;
import com.example.kitchenkultures.repository.DishRepository;
import com.example.kitchenkultures.repository.HomeChefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeChefService {
    @Autowired
    HomeChefRepository homeChefRepository;
    DishRepository dishRepository;

    public HomeChef addHomeChef(HomeChef homeChef){
        return homeChefRepository.save(homeChef);
    }

    public String deleteHomeChef(int id){
        homeChefRepository.deleteById(id);
        return "deleted Sccuessfully";
    }


    public List<HomeChef> getHomechef() {
        return homeChefRepository.findAll();
    }
}
