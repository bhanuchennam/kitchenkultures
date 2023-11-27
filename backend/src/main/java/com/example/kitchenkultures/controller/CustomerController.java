package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.Customer;
import com.example.kitchenkultures.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/getcustomers")
    public List<Customer> getcustomer(){
        return customerService.getcustomers();
    }

    @PostMapping("/addcustomer")
    public Customer addCustomer(@RequestBody Customer customer){
        return customerService.addCustomer(customer);
    }

    @PutMapping("/updatecustomer")
    public Customer updateCustomer(@RequestBody Customer customer){
        return customerService.updateCustomer(customer);
    }

    @DeleteMapping("/deletecustomer/{id}")
    public String deleteCustomer(@PathVariable int id){
        return customerService.deleteCustomer(id);
    }
}
