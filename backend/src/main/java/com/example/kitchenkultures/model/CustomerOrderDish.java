package com.example.kitchenkultures.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "customerOrderDish")
public class CustomerOrderDish {
    @Id
    int homeChefId;
    @Id
    int customerOrderId;
    @Id
    int dishId;
    int quantity;
    double price;

}
