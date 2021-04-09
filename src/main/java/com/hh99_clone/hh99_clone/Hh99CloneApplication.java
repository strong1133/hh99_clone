package com.hh99_clone.hh99_clone;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.domain.Comment;
import com.hh99_clone.hh99_clone.repository.ArticleRepository;
import com.hh99_clone.hh99_clone.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
@RequiredArgsConstructor
public class Hh99CloneApplication {

    private final ArticleRepository articleRepository;
    private final CommentRepository commentRepository;

    @Bean
    public ApplicationRunner applicationRunner() {
        return args -> {
            articleRepository.save(new Article("이제 갓 두달된 신입 개발자의 일기", "나의 전공은??! 분명 작년까지만 해도 생명공학과에서 남들과 같이 제약회사나 화장품회사등에 취직할 생각이었던 것 같다. 위 사진처럼 실험실에서 인턴을 한 경험도 있다. 예상치 못했던 코로나가 터지고, 자취방에 반타의적으로 갇혀서 그동안 배웠던 파이썬으로 Django...", "html 저장용 컨텐츠다1", "MarkDown 저장용 컨텐츠다1",
                    "https://media.vlpt.us/images/taeung/post/e495774f-2251-4faa-a683-3ae6535fd321/duckling-1596725_1920.jpg?w=640", "taeung", 94));


            };
    }

    public static void main(String[] args) {
        SpringApplication.run(Hh99CloneApplication.class, args);
    }

}
