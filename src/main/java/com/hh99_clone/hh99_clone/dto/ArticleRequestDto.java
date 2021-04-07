package com.hh99_clone.hh99_clone.dto;

import lombok.Getter;

@Getter
public class ArticleRequestDto {
    String title;
    String contents;
    String image;
    String author;
    int liked;
}
