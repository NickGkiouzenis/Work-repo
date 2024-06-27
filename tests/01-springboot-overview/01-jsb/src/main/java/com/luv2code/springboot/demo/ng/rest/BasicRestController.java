package com.luv2code.springboot.demo.ng.rest;


import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
public class BasicRestController {

    //expose "/" that returns "Hello world"
    @GetMapping("/")
    public String sayhello(){
        return "Hello World!";
    }

    @Value("${coach.name}")
    private String coachName;

    @Value("${team.name}")
    private String teamName;

}