//package com.hh99_clone.hh99_clone.security;
//
//import com.hh99_clone.hh99_clone.domain.User;
//import com.hh99_clone.hh99_clone.repository.UserRepository;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;

//@Service
//public class UserDetailServiceImpl implements UserDetailsService {

//    private UserRepository userRepository;
//
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUsername(username).orElseThrow(
//                () -> new UsernameNotFoundException(username + " is not found")
//        );
//
//        return new UserDetailsImpl(user);
//    }
//}
