package com.hh99_clone.hh99_clone.service;

import com.hh99_clone.hh99_clone.domain.User;
import com.hh99_clone.hh99_clone.dto.SignupRequestDto;
import com.hh99_clone.hh99_clone.repository.UserRepository;
import com.hh99_clone.hh99_clone.security.kakao.KakaoOAuth;
import com.hh99_clone.hh99_clone.security.kakao.KakaoUserInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
//    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final KakaoOAuth kakaoOAuth;
    private static final String PWD_PATTERN = "AAABnv/xRVklrnYxKZ0aHgTBcXukeZygoC";

    // 일반 회원가입
    public User registerUser(SignupRequestDto signupRequestDto) {
        String username = signupRequestDto.getUsername();
        // 회원 id 중복체크
        Optional<User> found = userRepository.findByUsername(username);
        if(found.isPresent()){
            throw new IllegalArgumentException("이미 사용중인 ID 입니다.");
        }

        // 패스워드 인코딩
//        String password = passwordEncoder.encode(signupRequestDto.getPassword());
        String password = signupRequestDto.getPassword();
        String email = signupRequestDto.getEmail();
        User user = new User(username, password, email);
        userRepository.save(user);

        return user;
    }

    // 소셜 로그인 - 카카오
    public void kakaoLogin(String authorizedCode) {
        // 카카오 OAuth2를 통해 카카오 사용자 정보 조회
        KakaoUserInfo kakaoUserInfo = kakaoOAuth.getUserInfo(authorizedCode);
        Long kakaoId = kakaoUserInfo.getId();
        String email = kakaoUserInfo.getEmail();
        String nickname = kakaoUserInfo.getNickname();

        // DB에 중복된 Kakao Id가 있는지 확인
        User kakaoUser = userRepository.findByKakaoId(kakaoId).orElse(null);

        // DB에 중복된 Kakao Id가 없는 경우
        if(kakaoUser == null){
            // 카카오 이메일과 동일한 이메일을 가진 회원이 있는지 확인
            User sameEmailUser = userRepository.findByEmail(email).orElse(null);

            // 카카오 이메일과 동일한 이메일 회원이 있는 경우
            // 카카오 id를 회원정보에 저장
            if(sameEmailUser != null){
                kakaoUser = sameEmailUser;
                kakaoUser.update(kakaoId);
                userRepository.save(kakaoUser);


            }else{
                // 카카오 정보로 회원가입
                // username = 카카오 nickname
                String username = nickname;
                // password = 카카오 id + PASSWORDPATTERN
                String password = kakaoId + PWD_PATTERN;
                // 패스워드 인코딩
//                String encodedPassword = passwordEncoder.encode(password);

                kakaoUser = new User(username, password, email, kakaoId);
                userRepository.save(kakaoUser);
            }
        }

//        // 강제 로그인 처리
//        UserDetailsImpl userDetails = new UserDetailsImpl(kakaoUser);
//        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//        securityContextHolder.getContext().setAuthentication(authentication);

    }

    // ----------------------------- api Test -----------------------------

    // 회원 정보 수정
    @Transactional
    public User updateUser(Long id, SignupRequestDto signupRequestDto) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 아이디가 없습니다.")
        );
        user.updateUser(signupRequestDto);
        return user;
    }

    // 회원 조회
    public List<User> getUser() {
        return userRepository.findAll();
    }

    // 특정 회원 조회
    public User detailUser(Long id) {
        final User user = userRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 아이디가 없습니다.")
        );
        return user;
    }

    // 탈퇴(삭제)
    public Long deleteUser(Long id) {
        userRepository.deleteById(id);
        return id;
    }
}