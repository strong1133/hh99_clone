package com.hh99_clone.hh99_clone.controller;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import com.hh99_clone.hh99_clone.repository.ArticleRepository;
import com.hh99_clone.hh99_clone.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class ArticleRestController {

    private final ArticleRepository articleRepository;
    private final ArticleService articleService;

    @GetMapping("/api/articles")
    public List<Article> getArticle(){
        return articleRepository.findAll();
    }

    @PostMapping("/api/articles")
    public Article createArticle(@RequestBody ArticleRequestDto articleRequestDto){
        Article article = new Article(articleRequestDto);
        return articleRepository.save(article);
    }

    @PutMapping("/api/articles/{id}")
    public Long updateArticle(@PathVariable Long id, @RequestBody ArticleRequestDto articleRequestDto){
        return articleService.update(id, articleRequestDto);
    }

    @DeleteMapping("/api/articles/{id}")
    public Long deleteArticle(@PathVariable Long id){
        articleRepository.deleteById(id);
        return id;
    }
}
