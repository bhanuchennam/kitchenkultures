package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.CustomerOrder;
import com.example.kitchenkultures.repository.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerOrderController {

    @Autowired
    CustomerOrderRepository customerOrderRepository;
    @GetMapping("/user/{username}")
    public List<CustomerOrder> getOrdersByUsername(@PathVariable String username) {
        return customerOrderRepository.findByUserUsername(username);
    }

}
