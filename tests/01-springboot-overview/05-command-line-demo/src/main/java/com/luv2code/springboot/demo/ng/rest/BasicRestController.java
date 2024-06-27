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

    @GetMapping("/workout")
    public String getDailyWorkout(){
        return "Run a hard 5k!";
    }

    @GetMapping("/fortune")
    public String getDailyFortune(){
        return "Today is your lucky day.";
    }

    @GetMapping("/actuator/health")
    public String getHealth(){
        return "This site is very healthy.";
    }

    @Value("${coach.name}")
    private String coachName;

    @Value("${team.name}")
    private String teamName;


}