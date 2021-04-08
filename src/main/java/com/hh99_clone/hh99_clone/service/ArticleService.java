package com.hh99_clone.hh99_clone.service;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.domain.Reaction;
import com.hh99_clone.hh99_clone.domain.User;
import com.hh99_clone.hh99_clone.dto.ArticleLikedDto;
import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import com.hh99_clone.hh99_clone.repository.ArticleRepository;
import com.hh99_clone.hh99_clone.repository.ReactionRepository;
import com.hh99_clone.hh99_clone.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;

    // 아티클 전체조회 최신순
    public List<Article> getArticles() {
        return articleRepository.findAllByOrderByModifiedAtDesc();
    }

    // 아티클 전체조회 인기순
    public List<Article> getPopArticles() {
        return articleRepository.findAllByOrderByTotalLiked();
    }


    // 아티클 작성
    @Transactional
    public Article createArticle(ArticleRequestDto articleRequestDto) {
        Article article = new Article(articleRequestDto);
        articleRepository.save(article);
        return article;
    }

    // 아티클 수정
    @Transactional
    public Long update(Long id, ArticleRequestDto  articleRequestDto){
        Article article = articleRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 아이디가 없습니다.")
        );
        article.update(articleRequestDto);
        return article.getId();
    }

    // 아티클 삭제
    @Transactional
    public Long deleteArticle(Long id) {
        articleRepository.deleteById(id);
        return id;
    }

    // 아티클 세부 조회
    @Transactional
    public Article getDetail(Long id) {
        final Article article = articleRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다.")
        );
        return article;
    }

}
