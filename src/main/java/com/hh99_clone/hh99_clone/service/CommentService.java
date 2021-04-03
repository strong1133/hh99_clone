package com.hh99_clone.hh99_clone.service;

import com.hh99_clone.hh99_clone.domain.Comment;
import com.hh99_clone.hh99_clone.dto.CommentRequestDto;
import com.hh99_clone.hh99_clone.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository){
        this.commentRepository = commentRepository;
    }

    // 댓글 등록
    @Transactional
    public Comment createComment(CommentRequestDto commentRequestDto) {
        Comment comment = new Comment(commentRequestDto);
        commentRepository.save(comment);
        
        return comment;
    }

    // 댓글 조회
    public List<Comment> getComments() {
        return commentRepository.findAll();
    }

    // 댓글 수정
    @Transactional
    public Comment updateComment(Long id, CommentRequestDto commentRequestDto) {
        Comment comment = commentRepository.findById(id).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 않습니다.")
        );
        comment.update(commentRequestDto);
        return comment;
    }

    // 댓글 삭제
    public Long deleteComment(Long id) {
        commentRepository.deleteById(id);
        return id;
    }
}
