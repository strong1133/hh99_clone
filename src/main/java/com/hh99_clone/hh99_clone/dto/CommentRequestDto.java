package com.hh99_clone.hh99_clone.dto;

import lombok.Getter;

@Getter
public class CommentRequestDto {
    private String username;
    private String contents;
    private Long articleId;
}