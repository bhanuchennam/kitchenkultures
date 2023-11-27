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
@Table(name = "home_chef") // Specify the table name if it's different from the default
public class HomeChef {

    @Id
    int id;

    // Change the field name to userName and follow JavaBean naming conventions
    String userName;

    String password;
    String first_name;
    String Last_name;
    String email;
    Number phoneNumber;
    String street;
    String city;
    String state;
    int zipcode;
    Date create_Date;
    Date update_Date;
    Boolean active;

    // Getter and setter for userName following JavaBean naming conventions
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
