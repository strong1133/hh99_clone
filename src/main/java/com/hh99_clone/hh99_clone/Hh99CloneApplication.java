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
            articleRepository.save(new Article("커리어 첫 빅똥을 싼 뉴비들에게 바치는 위로", "이 글은 뉴비였던 과거의 나와 현재의 뉴비들에게 드리는 글입니다. 누구나 똥은 쌉니다. 한 번쯤은 좀 큰 똥도 쌉니다. 개발자 커리어에서도 마찬가지입니다. 만약 그랬어도 너무 자책하지 말라는 말을 하고 싶습니다. 다음부터 안 그러면 돼요.", "https://media.vlpt.us/images/laviande22/post/84756ee9-751e-42de-a6d3-4f4556ef8d70/doesntwork.jpeg?w=640",
                    "laviande22", 26));

            articleRepository.save(new Article("프론트엔드 개발자 면접 정리", "프론트엔드 개발자로 면접을 진행하면서 받았던 질문 및 면접 정리", "https://media.vlpt.us/images/suyeonme/post/96afceb5-4686-4fc9-80ed-9b4b225fa60f/vector-designer-s-desktop-illustration.jpg?w=640",
                    "suyeonme", 108));

            articleRepository.save(new Article("우리는 마이스터고의 개발자입니다!\uD83E\uDDD0", "대덕 소프트웨어 마이스터고 개발자들의 우당탕탕 프로젝트 이야기", "https://media.vlpt.us/images/jidole02/post/ddb50e66-5136-41bf-809b-bcbaf8546c66/image.png?w=640",
                    "jidole02", 24));

            articleRepository.save(new Article("\uD83D\uDD10 https로 React 로컬 테스팅하기", "크롬 업데이트하고 로컬에서 로그인이 안 되네..?!", "https://media.vlpt.us/images/yaytomato/post/89950602-725f-4708-88de-79ee812aeaf1/giphy%20(2).gif?w=640",
                    "yaytomato", 14));

            articleRepository.save(new Article("Javascript 프로젝트를 시작하기에 앞서 - package 설정", "새로운 프로젝트를 시작할 때, 제일 처음하는 일은 repository를 clone한 후 이것 저것 환경설정을 하는 일입니다. 뭐든지 초반세팅을 잘해놔야 문제없이 할 수 있는 법이죠ㅎㅎ 초반세팅에 대하여 알아봅니다", "https://media.vlpt.us/images/bigsaigon333/post/87fcdfea-f11e-427a-880f-d63daa80518d/prettier-1280x720.png?w=640",
                    "bigsaigon333", 16));

            articleRepository.save(new Article("마켓컬리 클론 프로젝트 후기", "1. 마켓컬리 클론 프로젝트 > \"처음으로 제대로 된 팀프로젝트를 경험하다.\" 대학에서 jsp를 활용한 웹프로젝트와 아두이노,라즈베리파이를 활용한 프로젝트를 경험했었다. > 그럼 프로젝트 경험은 있네??! 팀 프로젝트라고 하기에 부르기에 애매한 프로젝트들이 많았...", "https://media.vlpt.us/images/chyoon0512/post/70605e47-8679-47ba-a1c2-a31b44c27bd9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-28%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.52.43.png?w=640",
                    "chyoon0512", 8));
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(Hh99CloneApplication.class, args);
    }

}
