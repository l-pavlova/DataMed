package com.example.dataMed.controller;

import com.example.dataMed.model.User;
import com.example.dataMed.model.dto.UserDto;
import com.example.dataMed.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;
    private ModelMapper modelMapper = new ModelMapper();;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        User user = userService.createUser(userDto);
        return new ResponseEntity<>(this.modelMapper.map(user, UserDto.class), HttpStatus.CREATED);
    }

}
