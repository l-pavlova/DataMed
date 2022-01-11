package com.example.dataMed.controller;

import com.example.dataMed.model.User;
import com.example.dataMed.model.dto.UserDto;
import com.example.dataMed.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;
    private ModelMapper modelMapper = new ModelMapper();;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        User user = userService.createUser(userDto);
        return new ResponseEntity<>(this.modelMapper.map(user, UserDto.class), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<String> GetUser() {
        return new ResponseEntity<String>( "text", HttpStatus.valueOf(200));
    }

}
//lusi remember:
//F8 == F10
//F7 == F11
//F9 == F5