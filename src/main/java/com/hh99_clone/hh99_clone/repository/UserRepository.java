package com.hh99_clone.hh99_clone.repository;


import com.hh99_clone.hh99_clone.domain.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
   @EntityGraph(attributePaths = "authorities")
   Optional<User> findOneWithAuthoritiesByUsername(String username);
   Optional<User> findOneWithAuthoritiesByNickname(String nickname);
   Optional<User> findByKakaoId(Long kakaoId);
}
