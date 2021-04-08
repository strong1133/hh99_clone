package com.hh99_clone.hh99_clone.repository;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.domain.Reaction;
import com.hh99_clone.hh99_clone.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReactionRepository extends JpaRepository<Reaction, Long> {
    // 좋아요 중복 방지
    Reaction findByUserAndArticle(User user, Article article);
    // 해당 게시글에 달린 좋아요 갯수 구하기
    long countByArticleId(long articleId);
}
