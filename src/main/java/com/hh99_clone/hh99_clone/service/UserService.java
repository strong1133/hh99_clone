package com.hh99_clone.hh99_clone.service;


import com.hh99_clone.hh99_clone.domain.Authority;
import com.hh99_clone.hh99_clone.domain.User;
import com.hh99_clone.hh99_clone.dto.TokenDto;
import com.hh99_clone.hh99_clone.dto.UserDto;
import com.hh99_clone.hh99_clone.jwt.JwtFilter;
import com.hh99_clone.hh99_clone.repository.UserRepository;
import com.hh99_clone.hh99_clone.security.kakao.KakaoOAuth;
import com.hh99_clone.hh99_clone.security.kakao.KakaoUserInfo;
import com.hh99_clone.hh99_clone.util.SecurityUtil;
import com.hh99_clone.hh99_clone.util.SignupValidator;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final KakaoOAuth kakaoOAuth;
    private static final String SCERET_KEY="AWDSDV_/xASDqDEDS34f0FSAvcvsZwddsffwooo";

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, KakaoOAuth kakaoOAuth) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.kakaoOAuth = kakaoOAuth;
    }

    @Transactional
    public User signup(UserDto userDto) {
        if (userRepository.findOneWithAuthoritiesByUsername(userDto.getUsername()).orElse(null) != null) {
            throw new IllegalArgumentException("이미 가입되어 있는 유저입니다.");
        }
        //Email
        String username = userDto.getUsername();
        if (!SignupValidator.emailValid(username)){
            throw new IllegalArgumentException("이메일 형식이 올바르지 않습니");
        }

        //PW
        String password = userDto.getPassword();
        //정규식 검사
        if(!SignupValidator.pwValid(username, password)){
            throw new IllegalArgumentException("비밀번호 형식이 올바르지 않습니다.");
        }

        //빌더 패턴의 장점
        Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();

        User user = User.builder()
                .username(userDto.getUsername())
                .password(passwordEncoder.encode(userDto.getPassword()))
                .nickname(userDto.getNickname())
                .authorities(Collections.singleton(authority))
                .activated(true)
                .build();

        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public Optional<User> getUserWithAuthorities(String username) {
        return userRepository.findOneWithAuthoritiesByUsername(username);
    }

    @Transactional(readOnly = true)
    public Optional<User> getMyUserWithAuthorities() {
        return SecurityUtil.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUsername);
    }

    //카카오
    public Optional<User> getkakaoUserinfo(String authorizedCode){
        KakaoUserInfo userInfo = kakaoOAuth.getUserInfo(authorizedCode);
        Long kakaoId = userInfo.getId();
        return userRepository.findByKakaoId(kakaoId);
    }

    public void kakaoLogin(String authorizedCode){
        KakaoUserInfo userInfo = kakaoOAuth.getUserInfo(authorizedCode);
        Long kakaoId = userInfo.getId();
        String nickname = userInfo.getNickname();
        String email = userInfo.getEmail();

        User kakaoUser = userRepository.findByKakaoId(kakaoId)
                .orElse(null);
        System.out.println(kakaoUser);
        if (kakaoUser == null){
            User sameEmailUser = userRepository.findOneWithAuthoritiesByUsername(email).orElse(null);
            if (sameEmailUser != null){
                kakaoUser = sameEmailUser;
                kakaoUser.setKakaoId(kakaoId);
                userRepository.save(kakaoUser);
            }else {
                String password = kakaoId + SCERET_KEY;

                Authority authority = Authority.builder()
                        .authorityName("ROLE_USER")
                        .build();

                User user = User.builder()
                        .username(email)
                        .password(passwordEncoder.encode(password))
                        .nickname(nickname)
                        .authorities(Collections.singleton(authority))
                        .activated(true)
                        .build();

                userRepository.save(user);
            }
        }

//        UsernamePasswordAuthenticationToken authenticationToken =
//                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());
//
//        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        String jwt = tokenProvider.createToken(authentication);
//
//        HttpHeaders httpHeaders = new HttpHeaders();
//        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);
//
//        return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
    }
}

