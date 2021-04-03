package com.hh99_clone.hh99_clone;

import com.hh99_clone.hh99_clone.domain.Article;
import com.hh99_clone.hh99_clone.repository.ArticleRepository;
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

    @Bean
    public ApplicationRunner applicationRunner() {
        return args -> {
            articleRepository.save(new Article("프론트엔드 개발자 면접 정리", "프론트 엔드 개발자로 면접을 진행하면서 받았떤 질문 및 면접 정리",
                    "https://media.vlpt.us/images/suyeonme/post/96afceb5-4686-4fc9-80ed-9b4b225fa60f/vector-designer-s-desktop-illustration.jpg?w=640", "suyeonme", 94));
            articleRepository.save(new Article("웹 개발 작업을 더 쉽고 효과적으로 만들어주는 유용한 도구들!", "프론트엔드 SEO에서 모바일에 이르기까지 웹사이트에서 확인해야 할 중요한 사항들 체크 등 등 여러가지 유용한 도구들", "https://media.vlpt.us/images/openhub/post/d296f593-819a-4b55-9dca-c76d7edaa34a/nice-webdev-tools.png?w=640",
                    " openhub", 109));
            articleRepository.save(new Article("\uD83D\uDCA9\uD83D\uDE22 커리어 첫 빅똥을 싼 뉴비들에게 바치는 위로", "이 글은 뉴비였던 과거의 나와 현재의 뉴비들에게 드리는 글입니다. 누구나 똥은 쌉니다. 한 번쯤은 좀 큰 똥도 쌉니다. 개발자 커리어에서도 마찬가지입니다. 만약 그랬어도 너무 자책하지 말라는 말을 하고 싶습니다. 다음부터 안 그러면 돼요.", "https://media.vlpt.us/images/laviande22/post/84756ee9-751e-42de-a6d3-4f4556ef8d70/doesntwork.jpeg?w=640",
                    "laviande22", 26));
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(Hh99CloneApplication.class, args);
    }

}
