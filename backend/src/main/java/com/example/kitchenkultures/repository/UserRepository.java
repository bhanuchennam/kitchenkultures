package com.example.kitchenkultures.repository;

import com.example.kitchenkultures.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// UserRepository.java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}

