package com.example.dataMed.service;

import com.example.dataMed.model.User;
import com.example.dataMed.dto.UserDto;

// leave interface for debugging purposes

public interface UserService {
    User createUser(UserDto userDto);
}
