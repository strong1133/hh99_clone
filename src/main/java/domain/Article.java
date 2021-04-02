package domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Article {
    private String content;
    private String createdAt;
    private String username;

    public Article(String content, String createdAt, String username) {
        this.content = content;
        this.createdAt = createdAt;
        this.username = username;
    }

}
