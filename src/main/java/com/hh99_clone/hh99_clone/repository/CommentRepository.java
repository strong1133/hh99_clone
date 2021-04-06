package com.hh99_clone.hh99_clone.repository;


import com.hh99_clone.hh99_clone.domain.Comment;
import com.hh99_clone.hh99_clone.util.CommentSpecs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> , JpaSpecificationExecutor<Comment> {
    List<Comment> findAllByOrderByModifiedAtDesc();

}