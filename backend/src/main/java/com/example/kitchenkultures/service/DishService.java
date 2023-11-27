package com.example.kitchenkultures.service;

import com.example.kitchenkultures.model.Dish;
import com.example.kitchenkultures.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class DishService {
    @Autowired
    DishRepository dishRepository;
    public Dish addItem(Dish dish){
        return dishRepository.save(dish);
    }

    public String deleteItem(int id) {
        dishRepository.deleteById(id);
        return "deleted successfully";
    }

    public Dish updateItem(Dish dish){
        Dish existingDish = dishRepository.findById(dish.getId()).orElse(null);
        existingDish.setDishName(dish.getDishName());
        existingDish.setUnitPrice(dish.getUnitPrice());
        existingDish.setFoodType(dish.getFoodType());
        existingDish.setActive(dish.getActive());
        existingDish.setDescription(dish.getDescription());
        existingDish.setCreateDate(dish.getCreateDate());
        existingDish.setCostUpdate(dish.getCostUpdate());
        return dishRepository.save(existingDish);




    }

    public List<Dish> getDishes() {
        return dishRepository.findAll();
    }

    public void saveDish(Dish dish){

        dishRepository.save(dish);
    }

    public Dish getProductById(Integer id) {
        return dishRepository.findById(id).orElse(null);
    }
}
