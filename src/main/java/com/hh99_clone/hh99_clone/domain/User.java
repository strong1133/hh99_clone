package com.hh99_clone.hh99_clone.domain;

import com.hh99_clone.hh99_clone.dto.SignupRequestDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class User extends Timestamped {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false)
    private String username;    // 사용자 이름

    @Column(nullable = false)
    private String password;    // 비밀번호

    @Column(nullable = false)
    private String email;       // 메일

    @Column(nullable = true)
    private Long kakaoId;       // 카카오id

    // 일반 회원
    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    // 카카오 회원
    public User(String username, String password, String email, Long kakaoId) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.kakaoId = kakaoId;
    }

    // 기존회원 kakaoId 업데이트
    public void update (Long kakaoId){
        this.kakaoId = kakaoId;
    }

    // ----------------------------- api Test -----------------------------
    // User 업데이트
    public void updateUser (SignupRequestDto signupRequestDto){
       this.username = signupRequestDto.getUsername();
       this.password = signupRequestDto.getPassword();
       this.email = signupRequestDto.getEmail();
    }
}
