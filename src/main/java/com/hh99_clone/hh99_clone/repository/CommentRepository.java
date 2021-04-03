package com.hh99_clone.hh99_clone.repository;

import com.hh99_clone.hh99_clone.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    
}