package com.hh99_clone.hh99_clone.domain;

import com.hh99_clone.hh99_clone.dto.CommentRequestDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Comment extends TimeStamped{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String contents;

    @Column(nullable = false)
    private Long articleId;

    public Comment(CommentRequestDto commentRequestDto){
        this.username =commentRequestDto.getUsername();
        this.contents = commentRequestDto.getContents();
        this.articleId = commentRequestDto.getArticleId();
    }

    public void update(CommentRequestDto commentRequestDto){
        this.contents = commentRequestDto.getContents();
    }
}
