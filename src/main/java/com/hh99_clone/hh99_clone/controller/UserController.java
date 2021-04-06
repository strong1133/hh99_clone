package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class UserController {

    private final UserService userService;
//    // 서버가 허용하지 않는 웹 페이지 접근 시 403에러 페이지 반환
//    public String forbidden(){
//        return "forbidden";
//    }
//
//    // 회원 로그인 페이지
//    @GetMapping("/user/login")
//    public String login(){
//        return "login";
//    }
//
//    // 로그인 실패
//    @GetMapping("/user/login/error")
//    public String loginError(Model model){
//        model.addAttribute("loginError", true);
//        return "login";
//    }
//
//    // 회원 가입 페이지
//    @GetMapping("/user/signup")
//    public String signup(){
//        return "signup";
//    }
//
//    // 회원 가입 요청 처리
//    @PostMapping("/user/signup")
//    public String registerUser(@RequestBody SignupRequestDto signupRequestDto){
//        userService.registerUser(signupRequestDto);
//        return "redirect:/";
//    }
//
//    // 소셜 로그인 - 카카오
//    @GetMapping("/user/kakao/callback")
//    public String kakaoLogin(String authorizedCode ){
//        // authorizedCode: 카카오 서버로부터 받은 인가 코드
//        userService.kakaoLogin(authorizedCode);
//
//        return "redirect:/";
//    }

}
