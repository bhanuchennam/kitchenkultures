package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.Dish;
import com.example.kitchenkultures.model.HomeChef;
import com.example.kitchenkultures.model.HomechefRegistartion;
import com.example.kitchenkultures.service.HomeChefRegistraionService;
import com.example.kitchenkultures.service.HomeChefService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeChefController {

    @Autowired
    HomeChefService homeChefService;

    @PostMapping("/addhomechef")
    public HomeChef addHomeChef(@RequestBody HomeChef homeChef){
        return homeChefService.addHomeChef(homeChef);
    }

    @GetMapping("/listhomechefs")
    public List<HomeChef> listHomechef(){
        return homeChefService.getHomechef();
    }

    @DeleteMapping("/deletehomechef/{id}")
    public String deleteHomeChef(@PathVariable int id){
        return homeChefService.deleteHomeChef(id);
    }

}
