package com.example.kitchenkultures.repository;

import com.example.kitchenkultures.model.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerOrderRepository extends JpaRepository<CustomerOrder, Integer> {
    List<CustomerOrder> findByUserUsername(String username);
}
