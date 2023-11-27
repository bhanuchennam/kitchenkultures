package com.example.kitchenkultures.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.kitchenkultures.model.Cart;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    List<Cart> findByUserId(int userId);
    Long countByUserId(int userId);

}
