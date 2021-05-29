## Velog 클론코딩
항해99 Chapter4 클론 프로젝트

+ 기간: 202104.02-04.09
+ 인원: 4명 (FrontEnd 2, BackEnd 2)
+ FrontEnd: React, Redux, Thunk, Styled-Component
+ BackEnd: Spring-boot, JPA, MySQL
+ 일정관리: Notion


## 구성

#### 메인페이지
+ 트렌딩/최신순 조회하기
![](https://images.velog.io/images/ouo_yoonk/post/38ab1bae-edb1-4d47-b0e6-3e86f0be83bc/v_main.gif)

#### 로그인/회원가입
+ jwt 토큰 이용(header에 토큰 셋팅 + jwt로 유저정보 가져오기 + store에 유저정보 저장)
+ 로그인 여부에 따라 헤더 변경

#### 글쓰기, 수정, 삭제
+ toast editor 사용
![](https://images.velog.io/images/ouo_yoonk/post/ea49d5f6-fcb6-4f2b-9fc2-5b62d4b69656/v_write.gif)

![](https://images.velog.io/images/ouo_yoonk/post/b407834d-b8b8-457c-91e7-77e72996a90f/v_ud.gif)
- 내가 쓴 글만 수정, 삭제 가능

#### 댓글 달기, 수정, 삭제
![](https://images.velog.io/images/ouo_yoonk/post/c866e4ca-f4da-4d3c-93a9-87cd3a8366df/v_comment.gif)

#### 반응형
![](https://images.velog.io/images/ouo_yoonk/post/9df2b531-1e94-488a-8a29-5ae4842223ad/response.gif)


## 회고
Chapter4 클론코딩 프로젝트로 우리 조는 벨로그를 선택했고, 메인페이지, 로그인/회원가입, 상세페이지, 로그인, 글쓰기 기능을 구현했다.
그 중 내가 담당한 파트는 메인페이지, 로그인/회원가입, 헤더 부분이었다. 상세페이지에서 헤더 부분은 작성자의 아이디로 변경되도록 했다.

프론트엔드 개발자로서 백엔드 개발자와 협업한 첫 프로젝트이다. 백엔드에 대한 지식이 부족했지만 함께한 프론트엔드 분 뿐만 아니라 벡엔드 분도 프론트엔드를 너무나 잘 이해하고 계신 분이라 소통에 어려움이 없었고 오히려 백엔드 분에게 많이 배웠다. 나도 함께 나누고 공유하는 개발자가 되어야겠다고 느낀 프로젝트였다.
노션으로 진행 상황을 정리했고, 주로 gather나 slack으로 그때그때 회의를 하면서 프로젝트를 진행했다. 


### 새로 배운것 / 시도해본 것
- axios와 fetch를 사용한 API총신
- jwt 토큰 이용하기
- CSS: transition, animation, 모달창 기능
`styled-component`를 익숙해지는 시간이었다. css 변수도 사용할 수 있고, props도 공통으로 사용할 수 있어서 flex속성이나, 반응형 사이즈 같은 것을 저장해서 편하게 갖다썼다. 그리고 `box-sizing` 속성을 처음으로 사용했다. padding을 주면 그 사이즈만큼 전체 크기가 커져서 안맞는 경우가 있었는데, box-sizing:border-size 속성으로 해결했다.

### 다른 분의 코드를 보며 배운 부분
- 상세페이지 : 스크롤 시 위치가 고정되는 사이드바
- addEventListener를 사용했을 때는 꼭 removeEventListener를 해줄것! (이번에는 스크롤이벤트를 발생하는대로 다 받았는데, 메모리에 부담이 갈 수 있으니 다음번에는  setTimeout이나 throttle을 이용해 구현하기)


### 아쉬운 부분
로그인/회원가입을 통해 jwt토큰을 배웠지만, 상세페이지를 담당하시던 분에 비해서 CRUD 연습은 많이 못해본 것이 아쉽다.
다음 프로젝트에서는 CRUD를 더 많이 구현해볼 수 있는 파트를 담당해, API GET 요청 외에 POST와 PUT도 많이 사용해 보고싶다.


