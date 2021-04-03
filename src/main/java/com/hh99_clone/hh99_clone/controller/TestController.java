package com.hh99_clone.hh99_clone.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;

@RestController
public class TestController {

    @GetMapping("/api/hello")
    public HashMap hello(){
        HashMap result = new HashMap();
        result.put("message","헬로 스프링 + 리액트!");
        return result;
    }


}
