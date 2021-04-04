package com.hh99_clone.hh99_clone.domain;

import com.hh99_clone.hh99_clone.dto.SignupRequestDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class User extends Timestamped{

    public User(String username, String password, String password_check, String email){
        this.username = username;
        this.password = password;
        this.password_check =password_check;
        this.email=email;

    }
    public User(SignupRequestDto signupRequestDto){
        this.username = signupRequestDto.getUsername();
        this.password = signupRequestDto.getPassword();
        this.password_check = signupRequestDto.getPassword_check();
        this.email=signupRequestDto.getEmail();
    }

//    public User(String username, String password, String email, Long kakaoId){
//        this.username = username;
//        this.password = password;
//        this.email=email;
//        this.kakaoId = kakaoId;
//    }

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String password_check;

    @Column(nullable = false)
    private String email;

//    @Column(nullable = true)
//    private Long kakaoId;
}