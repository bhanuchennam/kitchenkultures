package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.Dish;
import com.example.kitchenkultures.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DishController {

    @Autowired
    DishService dishService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getDish")
    public List<Dish> getDishs(){
        return dishService.getDishes();
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addDish")
    public Dish addItem(@RequestBody Dish dish){
        return dishService.addItem(dish);
    }

    @DeleteMapping("/deleteItem/{id}")
    public String deleteItem(@PathVariable int id){
        return dishService.deleteItem(id);
    }

    @PutMapping("/updateItem")
    public Dish updateItem(@RequestBody Dish dish){
        return dishService.updateItem(dish);
    }
    @PostMapping("/upload")
    public ResponseEntity<String> uploadDishImage(@RequestBody Dish dish) {
        dishService.saveDish(dish);
        return ResponseEntity.ok("Product uploaded successfully.");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dish> getProduct(@PathVariable Integer id) {
        Dish dish = dishService.getProductById(id);
        return ResponseEntity.ok(dish);
    }
}
