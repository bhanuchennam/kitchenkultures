package com.example.kitchenkultures.repository;

import com.example.kitchenkultures.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {
}
