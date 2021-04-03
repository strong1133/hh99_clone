package com.hh99_clone.hh99_clone.repository;

import com.hh99_clone.hh99_clone.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ArticleRepository extends JpaRepository<Article, Long> {
}
