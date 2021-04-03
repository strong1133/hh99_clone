package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.domain.Comment;
import com.hh99_clone.hh99_clone.dto.CommentRequestDto;
import com.hh99_clone.hh99_clone.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }

    // 댓글 등록
    @PostMapping ("/api/comments")
    public Comment createComment(@RequestBody CommentRequestDto commentRequestDto){
        Comment comment = commentService.createComment(commentRequestDto);
        return comment;
    }

    // 댓글 조회
    @GetMapping("/api/comments")
    public List<Comment> getComments(){

        return commentService.getComments();
    }

    // 댓글 수정
    @PutMapping("/api/comments/{id}")
    public Long updateComment(@PathVariable Long id, @RequestBody CommentRequestDto commentRequestDto){
        Comment comment = commentService.updateComment(id, commentRequestDto);
        return comment.getId();
    }

    // 댓글 삭제
    @DeleteMapping("/api/comments/{id}")
    public Long deleteComment(@PathVariable Long id){
        return commentService.deleteComment(id);
    }
}
