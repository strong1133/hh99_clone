package com.hh99_clone.hh99_clone.domain;


import com.hh99_clone.hh99_clone.dto.CommentRequestDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Comment extends Timestamped{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;            // 테이블의 기본키 역할을 하는 id

    @Column(nullable = false)
    private String username;    // 댓글 작성자

    @Column(nullable = false)
    private String contents;    // 댓글 내용

    @Column(nullable = false)
    private Long articleId;     // 게시글 id (외래키 역)

    // Comment DTO 생성자
    public Comment(CommentRequestDto commentRequestDto){
        this.username =commentRequestDto.getUsername();
        this.contents = commentRequestDto.getContents();
        this.articleId = commentRequestDto.getArticleId();
    }

    // Comment 업데이트
    // username과 articleId는 사용자가 수정할 수 있는 칼럼이 아니기 때문에 contents만 update 메드에 수정한다.
    public void update(CommentRequestDto commentRequestDto){
        this.contents = commentRequestDto.getContents();
    }
}
