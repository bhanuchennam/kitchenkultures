package com.example.kitchenkultures.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "customerOrder")
public class CustomerOrder{
    @Id
    int id;
    int customerId;
    int homeChefId;
    Time create_time;
    Time request_time;
    double total_price;
    String status = "Not available";
    Date last_update;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getHomeChefId() {
		return homeChefId;
	}

	public void setHomeChefId(int homeChefId) {
		this.homeChefId = homeChefId;
	}

	public Time getCreate_time() {
		return create_time;
	}

	public void setCreate_time(Time create_time) {
		this.create_time = create_time;
	}

	public Time getRequest_time() {
		return request_time;
	}

	public void setRequest_time(Time request_time) {
		this.request_time = request_time;
	}

	public double getTotal_price() {
		return total_price;
	}

	public void setTotal_price(double total_price) {
		this.total_price = total_price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getLast_update() {
		return last_update;
	}

	public void setLast_update(Date last_update) {
		this.last_update = last_update;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

    
    


}
