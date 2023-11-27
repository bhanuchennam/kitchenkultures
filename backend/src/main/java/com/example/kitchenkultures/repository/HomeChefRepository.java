package com.example.kitchenkultures.repository;

import com.example.kitchenkultures.model.HomeChef;
import com.example.kitchenkultures.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HomeChefRepository extends JpaRepository<HomeChef, Integer> {
    Optional<HomeChef> findByUserName(String userName);

}
