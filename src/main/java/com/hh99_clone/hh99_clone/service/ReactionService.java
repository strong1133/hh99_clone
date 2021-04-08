package com.hh99_clone.hh99_clone.service;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.domain.Reaction;
import com.hh99_clone.hh99_clone.domain.User;
import com.hh99_clone.hh99_clone.dto.ArticleLikedDto;
import com.hh99_clone.hh99_clone.repository.ArticleRepository;
import com.hh99_clone.hh99_clone.repository.ReactionRepository;
import com.hh99_clone.hh99_clone.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class ReactionService {

    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    private final ReactionRepository reactionRepository;

    // 좋아요 카운트 증가
    @Transactional
    public Reaction addLiked(ArticleLikedDto articleLikedDto) {
        User user = userRepository.findByUserId(articleLikedDto.getUserId()).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 않습니다.")
        );
        Article article = articleRepository.findById(articleLikedDto.getArticleId()).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 않습니다.")
        );

        Long cul_liked = article.getTotalLiked();
        Long totalLiked = cul_liked + 1;

        // 게시글의 총 좋아요 수 업데이트
        article.updateTotalLiked(totalLiked);

        Reaction reaction = new Reaction(user, article);
        reactionRepository.save(reaction);

        return reaction;
    }

    // 좋아요 카운트 감소
    @Transactional
    public Reaction deleteLiked(ArticleLikedDto articleLikedDto) {
        User user = userRepository.findByUserId(articleLikedDto.getUserId()).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 않습니다.")
        );
        Article article = articleRepository.findById(articleLikedDto.getArticleId()).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 않습니다.")
        );

        Long cul_liked = article.getTotalLiked();
        Long totalLiked = cul_liked - 1;

        // 게시글의 총 좋아요 수 업데이트
        article.updateTotalLiked(totalLiked);

        Reaction reaction = new Reaction(user, article);
        reactionRepository.save(reaction);

        return reaction;
    }
}
