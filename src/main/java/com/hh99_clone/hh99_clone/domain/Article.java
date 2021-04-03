package com.hh99_clone.hh99_clone.domain;

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
    private String title;
    @Column(nullable = false)
    private String contents;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    private String author;
    @Column(nullable = false)
    private int likes;

    public Article (String title, String contents, String image, String author, int likes){
        this.title = title;
        this.contents = contents;
        this.image = image;
        this.author = author;
        this.likes = likes;
    }

    public Article (ArticleRequestDto articleRequestDto){
        this.title = articleRequestDto.getTitle();
        this.contents = articleRequestDto.getContents();
        this.image = articleRequestDto.getImage();
        this.author = articleRequestDto.getAuthor();
        this.likes = articleRequestDto.getLikes();
    }

    public void update (ArticleRequestDto articleRequestDto){
        this.title = articleRequestDto.getTitle();
        this.contents = articleRequestDto.getContents();
        this.image = articleRequestDto.getImage();
        this.author = articleRequestDto.getAuthor();
        this.likes = articleRequestDto.getLikes();
    }


}
