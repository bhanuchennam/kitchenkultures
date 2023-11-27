package com.example.kitchenkultures.repository;

import com.example.kitchenkultures.model.HomechefRegistartion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HomeChefRegistrationRepository extends JpaRepository<HomechefRegistartion, String> {
    Optional<HomechefRegistartion> findByUserName(String userName);

    String deleteByuserName(String userName);
}
