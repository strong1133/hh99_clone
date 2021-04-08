package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.domain.Reaction;
import com.hh99_clone.hh99_clone.dto.ArticleLikedDto;
import com.hh99_clone.hh99_clone.service.ReactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ReactionRestController {

    private final ReactionService reactionService;

    // 좋아요 카운트 증가
    @PostMapping("/api/liked/add")
    public Reaction addLiked(@RequestBody ArticleLikedDto articleLikedDto){
        return reactionService.addLiked(articleLikedDto);
    }

    // 좋아요 카운트 감소
    @DeleteMapping("/api/liked/delete")
    public Reaction deleteLiked(@RequestBody ArticleLikedDto articleLikedDto){
        return reactionService.deleteLiked(articleLikedDto);
    }
}
