package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.dto.ArticleLikedRequestDto;
import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import com.hh99_clone.hh99_clone.repository.ArticleRepository;
import com.hh99_clone.hh99_clone.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ArticleController {
    // 멤버 변수 선언
    private final ArticleService articleService;

    @Autowired
    public ArticleController(ArticleService articleService, ArticleRepository articleRepository){
        // 멤버 변수 생성
        this.articleService = articleService;
    }

    // 게시글 등록
    @PostMapping("/api/articles")
    public Article createArticle(@RequestBody ArticleRequestDto articleRequestDto){
        Article article = articleService.createArticle(articleRequestDto);

        return article;
    }

    // 전체 게시글 조회
    @GetMapping("/api/articles")
    public List<Article> getArticles(){

        return articleService.getArticles();
    }

    // 게시글 조회
    @GetMapping("api/detail/{id}")
    public Article getDetail(@PathVariable Long id){

        return articleService.getDetail(id);
    }

    // 게시글 수정
    @PutMapping("/api/articles/{id}")
    public Long updateArticle(@PathVariable Long id, @RequestBody ArticleRequestDto articleRequestDto){

        return articleService.updateArticle(id, articleRequestDto);
    }

    // 특정 게시글 삭제
    @DeleteMapping("/api/articles/{id}")
    public Long deleteArticle(@PathVariable Long id){

        return articleService.deleteArticle(id);
    }

    // 좋아요 카운트 증가
    @PutMapping("/api/liked/add/{id}")
    public Long addLiked(@PathVariable Long id, @RequestBody ArticleLikedRequestDto articleLikedRequestDto){
        Article article = articleService.addLiked(id, articleLikedRequestDto);

        return article.getId();
    }

    // 좋아요 카운트 감소
    @PutMapping("/api/liked/sub/{id}")
    public Long subLiked(@PathVariable Long id, @RequestBody ArticleLikedRequestDto articleLikedRequestDto){
        Article article = articleService.subLiked(id, articleLikedRequestDto);

        return article.getId();
    }

}
