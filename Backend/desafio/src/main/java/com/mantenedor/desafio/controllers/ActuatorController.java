package com.mantenedor.desafio.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActuatorController {
    @GetMapping("/liveness")
    public String liveness() {
        return "ok";
    }
}
