package com.hh99_clone.hh99_clone.domain;

import com.hh99_clone.hh99_clone.dto.ArticleLikedDto;
import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class  Article extends Timestamped {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String title; // 게시글 제목

    @Column(nullable = false)
    private String contents; // 게시글 내용
    @Column(nullable = false)
    private String image; // 게시글 사진링크
    @Column(nullable = false)
    private String author; // 게시글 작성자
    @Column(nullable = false)
    private int liked; // 게시글 좋아요 갯수

    // Article 더미 데이터 생성자
    public Article (String title, String contents, String image, String author, int liked){
        this.title = title;
        this.contents = contents;
        this.image = image;
        this.author = author;
        this.liked = liked;
    }

    // Article DTO 생성자
    public Article (ArticleRequestDto articleRequestDto){
        this.title = articleRequestDto.getTitle();
        this.contents = articleRequestDto.getContents();
        this.image = articleRequestDto.getImage();
        this.author = articleRequestDto.getAuthor();
        this.liked = 0;
    }

    // Article 업데이트
    public void update (ArticleRequestDto articleRequestDto){
        this.title = articleRequestDto.getTitle();
        this.contents = articleRequestDto.getContents();
        this.image = articleRequestDto.getImage();
        this.author = articleRequestDto.getAuthor();
        this.liked = articleRequestDto.getLiked();
    }

    //좋아요 업데이트
    public void updateLiked(ArticleLikedDto articleLikedDto){
        this.liked = articleLikedDto.getLiked();
    }


}
