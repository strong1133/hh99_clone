package com.hh99_clone.hh99_clone.repository;

import com.hh99_clone.hh99_clone.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findAllByOrderByModifiedAtDesc(); // 최신순
    List<Article> findAllByOrderByLikedDesc();      // 인기순 (좋아요 기준)
}
