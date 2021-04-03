package com.hh99_clone.hh99_clone.domain;

import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Article extends TimeStamped {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    // 회원가입 기능 구현 후에는 private String username -> private Member member 변경 예정.
    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String contents;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private int liked;

    public Article (ArticleRequestDto articleRequestDto){
        this.username = articleRequestDto.getUsername();
        this.title = articleRequestDto.getTitle();
        this.contents = articleRequestDto.getContents();
        this.image = articleRequestDto.getImage();
        this.liked = 0;

    }

    // Article 내용 수정
   public void update(ArticleRequestDto articleRequestDto){
        this.username = articleRequestDto.getUsername();
        this.title = articleRequestDto.getTitle();
        this.contents = articleRequestDto.getContents();
        this.image = articleRequestDto.getImage();
    }

    // 좋아요 변경
    public void updateLiked(int liked){
        this.liked = liked;
    }
}
