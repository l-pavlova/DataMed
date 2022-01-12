package com.example.dataMed.repository;

import com.example.dataMed.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// leave class for debugging purposes

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

}
