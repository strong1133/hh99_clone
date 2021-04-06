package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.domain.User;
import com.hh99_clone.hh99_clone.dto.SignupRequestDto;
import com.hh99_clone.hh99_clone.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserTestController {

    private final UserService userService;

    // 회원 가입
    @PostMapping("/api/users")
    public User registerUser(@RequestBody SignupRequestDto signupRequestDto){
        return userService.registerUser(signupRequestDto);
    }

    // 회원 정보 수정
    @PutMapping("/api/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody SignupRequestDto signupRequestDto){
        return userService.updateUser(id, signupRequestDto);
    }

    // 회원 조회
    @GetMapping("/api/users")
    public List<User> getUser(){
        return userService.getUser();
    }

    // 특정 회원 조회
    @GetMapping("/api/users/{id}")
    public User detailUser(@PathVariable Long id){
        return userService.detailUser(id);
    }

    // 탈퇴(삭제)
    @DeleteMapping("/api/users/{id}")
    public Long deleteUser(@PathVariable Long id){
        return userService.deleteUser(id);
    }

//    // 소셜 로그인 - 카카오
//    @GetMapping("/user/kakao/callback")
//    public String kakaoLogin(String authorizedCode ){
//        // authorizedCode: 카카오 서버로부터 받은 인가 코드
//        userService.kakaoLogin(authorizedCode);
//
//        return "redirect:/";
//    }

}
