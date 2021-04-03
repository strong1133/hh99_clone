package com.hh99_clone.hh99_clone.repository;

import com.hh99_clone.hh99_clone.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findAllByOrderByModifiedAtDesc(); // 최신순
    List<Article> findAllByOrderByLikedDesc();      // 인기순 (좋아요 기준)
}
