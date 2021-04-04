package com.hh99_clone.hh99_clone.service;


import com.hh99_clone.hh99_clone.domain.User;
import com.hh99_clone.hh99_clone.dto.SignupRequestDto;
import com.hh99_clone.hh99_clone.repository.UserRepository;
import com.hh99_clone.hh99_clone.util.SignupValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
//    private final KakaoOAuth kakaoOAuth;
    private final AuthenticationManager authenticationManager;
    private static final String SCERET_KEY="AWDSDV_/xASDqDEDS34f0FSAvcvsZwddsffwooo";

    //회원가입
    public void registerUser(SignupRequestDto signupRequestDto) {
        //ID
        String username = signupRequestDto.getUsername();
        //정규식 검사
        if(!SignupValidator.idValid(username)){
            throw new IllegalArgumentException("idValid");
        }
        //중복검사
        Optional<User> found = userRepository.findByUsername(username);
        if (found.isPresent()) {
            throw new IllegalArgumentException("duplicate");
        }

        //PW
        String password = signupRequestDto.getPassword();
        String password_check = signupRequestDto.getPassword_check();
        //정규식 검사
        if(!SignupValidator.pwValid(username, password)){
            throw new IllegalArgumentException("pwValid");
        }
        //비밀번호 재입력 일치 검사
        if (!password.equals(password_check)) {
            throw new IllegalArgumentException("notequal");
        }
        //모든조건 충족시 비밀번호 암호화
        password = passwordEncoder.encode(signupRequestDto.getPassword());

        //Email
        String email = signupRequestDto.getEmail();
        if (!SignupValidator.emailValid(email)){
            throw new IllegalArgumentException("emailValid");
        }
        //중복검사
        Optional<User> found2 = userRepository.findByEmail(email);
        if (found2.isPresent()) {
            throw new IllegalArgumentException("Emailduplicate");
        }

//        // 모든 조건 통과 및 암호화된 사용자 계정정보를 DB에 저장
//        User user = new User(username, password, email);
//        userRepository.save(user);
    }

}