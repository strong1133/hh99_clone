package com.hh99_clone.hh99_clone.util;

import java.util.regex.Pattern;

public class SignupValidator {

    //Id
    public static boolean idValid(String id) {
        return Pattern.matches("^[A-za-z0-9]{5,15}", id);
    }

    //PW
    public static boolean pwValid(String id, String pw) {
        if (pw.contains(id)) {
            return false;
        }
        return Pattern.matches("^[A-Za-z0-9]{8,20}$", pw);
    }

    //Email
    public static boolean emailValid(String email){
        return Pattern.matches("^([\\w\\.\\_\\-])*[a-zA-Z0-9]+([\\w\\.\\_\\-])*([a-zA-Z0-9])+([\\w\\.\\_\\-])+@([a-zA-Z0-9]+\\.)+[a-zA-Z0-9]{2,8}$", email);
    }

}
