package com.hh99_clone.hh99_clone.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class ArticleLikedDto {
    private Long UserId;
    private Long articleId;
}
