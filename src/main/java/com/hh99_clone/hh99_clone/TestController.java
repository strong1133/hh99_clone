package com.hh99_clone.hh99_clone;

import domain.Article;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class TestController {

    private String content;
    private String createdAt;
    private String username;

    public TestController() {
        content = "hello world!";
        createdAt = "2021년 04월 01일";
        username = "conagreen";
    }

    @GetMapping("/api/hello")
    public String hello() {
        return "GET요청!";
    }

    @GetMapping("/api/articles")
    public Article getArticles() {
        Article article = new Article(content, createdAt, username);
        log.info("content: {}", article.getContent());
        log.info("createAt: {}", article.getCreatedAt());
        log.info("username: {}", article.getUsername());

        return article;
    }
}