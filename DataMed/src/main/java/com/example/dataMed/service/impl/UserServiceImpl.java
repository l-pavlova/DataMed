package com.example.dataMed.service.impl;

import com.example.dataMed.model.User;
import com.example.dataMed.dto.UserDto;
import com.example.dataMed.repository.UserRepository;
import com.example.dataMed.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// leave class for debugging purposes

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(UserDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        return userRepository.save(user);
    }
}
