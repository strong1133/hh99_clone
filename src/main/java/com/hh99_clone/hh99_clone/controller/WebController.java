package com.hh99_clone.hh99_clone.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class WebController implements ErrorController {
    @GetMapping({"/", "/error"})
    public String index() {
        return "index.html";
    }

    @GetMapping("/login/kakao/callback")
    public String kakaoLogin(String code){
        return "redirect:/";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}