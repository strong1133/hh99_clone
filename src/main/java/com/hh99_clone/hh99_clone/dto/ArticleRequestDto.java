package com.hh99_clone.hh99_clone.dto;

import com.hh99_clone.hh99_clone.domain.User;
import lombok.Getter;

@Getter
public class ArticleRequestDto {
    String title;
    String contents;        // 게시글 텍스트형태 (메인 미리보기용)
    String contentsHtml;    // 게시글 Html형태
    String contentsMd;      // 게시글 MarkDown 형태
    String image;
    User user;
}
