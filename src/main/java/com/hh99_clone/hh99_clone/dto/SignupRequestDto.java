package com.hh99_clone.hh99_clone.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SignupRequestDto {
    private String username;
    private String password;
    private String password_check;
    private String email;
}
