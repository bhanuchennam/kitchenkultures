package com.example.kitchenkultures.service;

import com.example.kitchenkultures.model.Customer;
import com.example.kitchenkultures.model.Dish;
import com.example.kitchenkultures.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    public Customer addCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Customer customer){
        Customer existingCustomer = customerRepository.findById(customer.getId()).orElse(null);
        existingCustomer.setActive(customer.getActive());
        existingCustomer.setCity(customer.getCity());
        existingCustomer.setEmail(customer.getEmail());
        existingCustomer.setPassword(customer.getPassword());
        existingCustomer.setState(customer.getState());
        existingCustomer.setCity(customer.getCity());
        existingCustomer.setFirst_name(customer.getFirst_name());
        existingCustomer.setLast_name(customer.getLast_name());
        existingCustomer.setPhoneNumber(customer.getPhoneNumber());
        existingCustomer.setUserName(customer.getUserName());
        existingCustomer.setZipcode(customer.getZipcode());

        return customerRepository.save(existingCustomer);




    }

    public String deleteCustomer(int id){
        customerRepository.deleteById(id);
        return "deleted successfully";
    }

    public List<Customer> getcustomers() {
        return customerRepository.findAll();
    }
}
