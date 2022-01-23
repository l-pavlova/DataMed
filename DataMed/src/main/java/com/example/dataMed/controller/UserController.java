package com.example.dataMed.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dataMed.dto.UserDto;
import com.example.dataMed.model.User;
import com.example.dataMed.service.UserService;

@RestController
@RequestMapping(value = "/users")//, produces = "application/json", consumes = "application/json"
public class UserController {
    private UserService userService;
    private ModelMapper modelMapper = new ModelMapper();;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // leave for debugging purposes
    @PostMapping("/register")
    public ResponseEntity<UserDto> createPatient(@RequestBody UserDto userDto) {
        User user = userService.createUser(userDto);

        return new ResponseEntity<>(this.modelMapper.map(user, UserDto.class), HttpStatus.CREATED);
    }

//    //@CrossOrigin(origins = "http://localhost:3000")
//    @CrossOrigin
//    @PostMapping("/register-doc")
//    public ResponseEntity<DoctorDto> registerDoc(@RequestBody DoctorDto doctorDto) {
//        return doctorService.register(doctorDto);
//    }
//
//    //tuka ne mojah da go izmislq guys, u do ur java magic da e za 2ta vida kak da e nz
//    @GetMapping("/login")
//    public ResponseEntity<DoctorDto> login(@RequestParam String username, @RequestParam String password) {
//        return doctorService.login(username, password);
//    }

}