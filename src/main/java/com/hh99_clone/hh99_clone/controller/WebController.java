package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.security.kakao.KakaoUserInfo;
import com.hh99_clone.hh99_clone.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
class WebController implements ErrorController {

    private final UserService userService;

    @GetMapping({"/", "/error"})
    public String index() {
        return "index.html";
    }

    @GetMapping("/login/kakao/callback")
    public String kakaoLogin(String code, Model model){
        userService.kakaoLogin(code);
//        model.addAttribute(userService.getkakaoUserinfo(code));
        return "redirect:/";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}