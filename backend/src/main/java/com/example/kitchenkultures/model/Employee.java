package com.example.kitchenkultures.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "employee")
public class Employee {
    @Id
    int id;
    String userName;
    String password;
    String first_name;
    String Last_name;
    String email;
    Number phoneNumber;
    Date create_date;
    Boolean active;
    String role;
    Date lastUpdate;
}
