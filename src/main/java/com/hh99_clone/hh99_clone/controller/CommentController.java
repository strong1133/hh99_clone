package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.domain.Comment;
import com.hh99_clone.hh99_clone.dto.CommentRequestDto;
import com.hh99_clone.hh99_clone.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class CommentController {
    private final CommentService commentService;

//    @Autowired
//    public CommentController(CommentService commentService){
//        this.commentService = commentService;
//    }

    // 댓글 조회
    @GetMapping("/api/comments")
    public List<Comment> getComments(){
        return commentService.getComments();
    }

    // 게시글 아이디에 해당하는 댓글 조회
    @GetMapping("/api/comments/{articleId}")
    public List<Comment> getCommentForArticleId(@PathVariable Long articleId){
        return commentService.getCommentForArticleId(articleId);
    }

    // 댓글 작성
    @PostMapping ("/api/comments")
    public Comment createComment(@RequestBody CommentRequestDto commentRequestDto){
        return commentService.createComment(commentRequestDto);
    }

    // 댓글 수정
    @PutMapping("/api/comments/{id}")
    public Comment updateComment(@PathVariable Long id, @RequestBody CommentRequestDto commentRequestDto){
        return commentService.updateComment(id, commentRequestDto);
    }

    // 댓글 삭제
    @DeleteMapping("/api/comments/{id}")
    public Long deleteComment(@PathVariable Long id){
        return commentService.deleteComment(id);
    }
}
