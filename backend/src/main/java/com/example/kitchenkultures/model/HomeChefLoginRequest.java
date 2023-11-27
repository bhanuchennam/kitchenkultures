package com.example.kitchenkultures.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class HomeChefLoginRequest {

    @Id
    private String userName;
    private String emailid;
    private String password;

    // Getters and setters

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

