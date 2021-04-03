package com.hh99_clone.hh99_clone.dto;

import lombok.Getter;

@Getter
public class ArticleRequestDto {
    private String username;
    private String title;
    private String contents;
    private String image;   // 썸네일 (해당 글의 첫번째 이미지)
}
