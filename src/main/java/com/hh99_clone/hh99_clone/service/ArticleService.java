package com.hh99_clone.hh99_clone.service;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import com.hh99_clone.hh99_clone.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Transactional
    public Long update(Long id, ArticleRequestDto  articleRequestDto){
        Article article = articleRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 아이디가 없습니다.")
        );
        article.update(articleRequestDto);
        return article.getId();
    }
}
