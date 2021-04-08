package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import com.hh99_clone.hh99_clone.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ArticleRestController {

    private final ArticleService articleService;

    // 아티클 전체 조회-최신순
    @GetMapping("/api/articles")
    public List<Article> getArticle(){
        return articleService.getArticles();
    }

    // 아티클 전체 조회-인기순
    @GetMapping("/api/articles/pop")
    public List<Article> getPopArticle(){
        return articleService.getPopArticles();
    }

    // 게시글 작성
    @PostMapping("/api/articles")
    public Article createArticle(@RequestBody ArticleRequestDto articleRequestDto){
        return articleService.createArticle(articleRequestDto);
    }

    //게시글 수정
    @PutMapping("/api/articles/{id}")
    public Long updateArticle(@PathVariable Long id, @RequestBody ArticleRequestDto articleRequestDto){
        return articleService.update(id, articleRequestDto);
    }

    //게시글 삭제
    @DeleteMapping("/api/articles/{id}")
    public Long deleteArticle(@PathVariable Long id){
        articleService.deleteArticle(id);
        return id;
    }

    // 특정 게시글 조회
    @GetMapping("/api/post/{id}")
    public Article getDetail(@PathVariable Long id){
        return articleService.getDetail(id);
    }

}
