package com.hh99_clone.hh99_clone.domain;

import com.hh99_clone.hh99_clone.dto.ArticleRequestDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
@Entity
public class  Article extends Timestamped {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String title;           // 게시글 제목

    @Column(length = 1000, nullable = false)
    private String contents;        // 게시글 텍스트형태 (메인 미리보기용)

    @Column(length = 1000, nullable = false)
    private String contentsHtml;    // 게시글 Html형태

    @Column(length = 1000, nullable = false)
    private String contentsMd;      // 게시글 MarkDown 형태

    @Column(nullable = false)
    private String image;           // 게시글 사진링크

//    @Column(nullable = false)
//    private String author;          // 게시글 작성자

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = true)
    private Long totalLiked;        // 해당 게시물의 좋아요 수

    @OneToMany(mappedBy = "article", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private Set<Reaction> reactions = new HashSet<>();


    // Article 더미 데이터 생성자
    public Article (String title, String contents, String contentsHtml, String contentsMd,String image){
        this.title = title;
        this.contents = contents;
        this.contentsHtml = contentsHtml;
        this.contentsMd = contentsMd;
        this.image = image;
    }

    // Article DTO 생성자
    public Article (ArticleRequestDto articleRequestDto){
        this.title = articleRequestDto.getTitle();
        this.contents = articleRequestDto.getContents();
        this.contentsHtml = articleRequestDto.getContentsHtml();
        this.contentsMd = articleRequestDto.getContentsMd();
        this.image = articleRequestDto.getImage();
        this.user = articleRequestDto.getUser();
    }

    // Article 업데이트
    public void update (ArticleRequestDto articleRequestDto){
        this.title = articleRequestDto.getTitle();
        this.contents = articleRequestDto.getContents();
        this.contentsHtml = articleRequestDto.getContentsHtml();
        this.contentsMd = articleRequestDto.getContentsMd();
        this.image = articleRequestDto.getImage();
        this.user = articleRequestDto.getUser();
    }

    // 해당 게시물 좋아요 수 업데이트
    public void updateTotalLiked(Long totalLiked){
        this.totalLiked = totalLiked;
    }


}
