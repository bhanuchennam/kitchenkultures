package com.example.kitchenkultures.service;

// CartService.java

import com.example.kitchenkultures.model.Cart;
import com.example.kitchenkultures.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private final CartRepository cartRepository;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart addToCart(Cart cartItem) {
        // Implement any business logic for adding to the cart
        return cartRepository.save(cartItem);
    }

    public void clearCart() {
        // Implement logic to clear the cart
        cartRepository.deleteAll();
    }

    // Add other methods as needed
}

