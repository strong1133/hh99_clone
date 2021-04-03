package com.hh99_clone.hh99_clone.service;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.dto.ArticleLikedRequestDto;
import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import com.hh99_clone.hh99_clone.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository){
        this.articleRepository = articleRepository;
    }

    @Transactional
    public Article createArticle(ArticleRequestDto articleRequestDto) {
        Article article = new Article(articleRequestDto);
        articleRepository.save(article);

        return article;
    }

    @Transactional
    public Long updateArticle(Long id, ArticleRequestDto articleRequestDto) {
        Article article = articleRepository.findById(id).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 없습니다.")
        );
        article.update(articleRequestDto);
        return article.getId();
    }

    public List<Article> getArticles() {
        return articleRepository.findAllByOrderByModifiedAtDesc();
    }

    public Article getDetail(Long id) {
        final Article article = articleRepository.findById(id).orElseThrow(
            () -> new NullPointerException("해당 게시글이 존재하지 않습니다.")
        );
        return article;
    }

    public Long deleteArticle(Long id) {
        articleRepository.deleteById(id);
        return id;
    }

    @Transactional
    public Article addLiked(Long id, ArticleLikedRequestDto articleLikedRequestDto) {
        Article article = articleRepository.findById(id).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 않습니다.")
        );
        int liked = articleLikedRequestDto.getLiked();
        article.updateLiked(liked);

        return article;
    }

    @Transactional
    public Article subLiked(Long id, ArticleLikedRequestDto articleLikedRequestDto) {
        Article article = articleRepository.findById(id).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 않습니다.")
        );
        int liked = articleLikedRequestDto.getLiked();
        article.updateLiked(liked);

        return article;
    }
}
