package com.hh99_clone.hh99_clone.controller;


import com.hh99_clone.hh99_clone.domain.User;
import com.hh99_clone.hh99_clone.dto.SignupRequestDto;
import com.hh99_clone.hh99_clone.repository.UserRepository;
import com.hh99_clone.hh99_clone.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;


//    @GetMapping("/user/login")
//    public String login(){return "login";}
    @GetMapping("/api/user/login")
    public List<User> getUser(){
        return userRepository.findAll();
    }

//    @GetMapping("/user/login/error")
//    public String loginError(Model model) {
//        model.addAttribute("loginError", true);
//        return "login";
//    }

    @GetMapping("/user/signup")
    public String signup(){return "signup";}

    // 회원 가입 요청 처리 & 중복및 오류체크
    @PostMapping("/user/signup")
    public User registerUser(@RequestBody SignupRequestDto signupRequestDto) {
        User user = new User(signupRequestDto);
        return userRepository.save(user);


//        try {
//            userService.registerUser(requestDto);
//        }catch (IllegalArgumentException e){
//            System.out.println(e);
//            model.addAttribute("message", e.getMessage());
//            return "signup";
//        }
//        return "asd";
    }

//    //카카오
//    @GetMapping("/user/kakao/callback")
//    public String kakaoLogin(String code) {
//        // authorizedCode: 카카오 서버로부터 받은 인가 코드
//        userService.kakaoLogin(code);
//
//        return "redirect:/";
//    }
}
