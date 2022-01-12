package com.example.dataMed.controller;

import com.example.dataMed.dto.DoctorDto;
import com.example.dataMed.model.User;
import com.example.dataMed.dto.UserDto;
import com.example.dataMed.service.DoctorService;
import com.example.dataMed.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;

@RestController
@RequestMapping(value = "/users")//, produces = "application/json", consumes = "application/json"
public class UserController {
    private UserService userService;
    private ModelMapper modelMapper = new ModelMapper();;

    @Autowired
    private DoctorService doctorService;


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

    @GetMapping
    public ResponseEntity<String> GetUser() {
        return new ResponseEntity<String>( "text", HttpStatus.valueOf(200));
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register-doc")
    public ResponseEntity<DoctorDto> registerDoc(@RequestBody DoctorDto doctorDto) {
        return doctorService.register(doctorDto);
    }

    //tuka ne mojah da go izmislq guys, u do ur java magic da e za 2ta vida kak da e nz
    @GetMapping("/login")
    public ResponseEntity<DoctorDto> GetUser(@RequestParam String username, @RequestParam String password) {
        return doctorService.login(username, password);
    }


}
//lusi remember:
//F8 == F10
//F7 == F11
//F9 == F5
//Ctrl+Alt+Shift+L == format code