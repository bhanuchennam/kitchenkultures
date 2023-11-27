package com.example.kitchenkultures.controller;

import com.example.kitchenkultures.model.Customer;
import com.example.kitchenkultures.model.Employee;
import com.example.kitchenkultures.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/getemployees")
    public List<Employee> getemployees(){
        return employeeService.getemployees();
    }

    @PostMapping("/addemployee")
    public Employee addemployee(@RequestBody Employee employee){
        return employeeService.addEmployee(employee);
    }

    @DeleteMapping("/deleteemployee/{id}")
    public String deleteEmployee(@PathVariable int id){
        return employeeService.deleteEmployee(id);
    }
}
