package com.example.kitchenkultures.service;

import com.example.kitchenkultures.model.Employee;
import com.example.kitchenkultures.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> getemployees() {
        return employeeRepository.findAll();
    }

    public String deleteEmployee(int id) {
        employeeRepository.deleteById(id);
        return "deleted successfully";
    }
}
