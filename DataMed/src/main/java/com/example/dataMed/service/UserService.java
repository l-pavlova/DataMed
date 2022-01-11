package com.example.dataMed.service;

import com.example.dataMed.model.User;
import com.example.dataMed.model.dto.UserDto;
import org.springframework.stereotype.Service;

public interface UserService {
    User createUser(UserDto userDto);
}
