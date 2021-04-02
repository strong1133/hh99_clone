package com.hh99_clone.hh99_clone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class TestController {

    @GetMapping("/api/hello")
    public String hello(){
        return "요것은 스프링에서 보낸것입니다!";
    }
}
