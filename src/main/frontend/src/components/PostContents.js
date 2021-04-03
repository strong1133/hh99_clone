import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const contents = `![](https://images.velog.io/images/ouo_yoonk/post/1143ecf8-926f-4718-910a-d8ec1766d9ca/vanilla-book.gif)

- 인프런강의 [실습 UI 개발로 배워보는 순수 javascript와 VueJS개발(김정환)](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C) 
> 검색폼을 바닐라 자바스크립트, MVC 패턴으로 구현한 뒤
같은 기능을 Vue.js, MVVM 패턴으로 구현하고, vue CLI를 이용해 싱글 파일컴포넌트로 바꾸는 프로젝트 클론코딩

&#128587; vanilla js로 구현하고 똑같은 것을 vue로 바꿔보니 js의 어떤 기능을 이용해 프레임워크를 만들었는지를 알 수 있었다. 프레임워크나 라이브러리가 마법같이 느껴지면 안된다고 했는데 (여전히 마법같지만) 무에서 유가 창조된것이 아니라는 것은 알겠다. 그리고 vue가 얼마나 편리한지도... SPA의 개념을 잡았고, drog and drop을 직접 구현해본게 가장 뿌듯하다! 더보기를 scroll로 했으면 더 좋았을텐데 실패했다..앞으로 해나가야지. 

## &#128161; 상세기능
__검색폼__
- 검색어가 없는 경우 x 버튼을 숨긴다
- 검색어를 입력하면 x버튼이 보인다
- 엔터를 입력하면 검색 결과가 보인다(컨트롤러에게 위임)
- x 버튼을 클릭하거나, 검색어를 삭제하면 검색 결과를 삭제한다

__탭__
- 최근 검색어, 즐겨찾기 탭이 검색폼 아래 위치한다
- 기본으로 추천 검색어 탭을 선택한다
- 각 탭을 클릭하면 탭 아래 내용이 변경된다

__검색 결과__
- 검색 결과가 검색폼 아래 위치한다
- x버튼을 클릭하면 검색폼이 초기화 되고, 검색 결과가 사라진다
- _axios로 카카오 책 검색 오픈 api 호출_
- _한 페이지당 최대 10개의 리스트가 보인다_
- _더보기를 클릭하면 10개씩 데이터를 더 로드하고, 마지막 페이지일 경우 더보기 버튼이 사라진다_
- _각 항목은 책 이미지와 책 제목, 저자, 책 설명, 출판사, 출판일, 가격정보를 제공한다_
- _각 항목마다 즐겨찾기 버튼이 있다_
- _즐겨찾기 버튼을 누르면 '즐겨찾기에 추가했습니다'라는 toast 노출_
- _각 항목에 마우스를 올리면 좀 더 긴 책 설명을 볼 수 있다_
- _각 항목을 클릭하면 해당 책정보 페이지로 이동한다_

__최근 검색어__
- 번호, 추천 검색어 목록이 탭 아래에 위치한다
- 삭제버튼을 클릭하면 최근 검색어 목록에서 삭제
- _localStorage에 저장_
- _최근 검색순으로 정렬_
- _중복 키워드가 있을 경우 최근 검색건이 더 위에 위치한다_
- _목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면으로 이동_

__즐겨찾기__
- 최근 검색어, 즐겨찾기 목록이 탭 아래 위치한다
- x 버튼을 클릭하면 선택된 항목을 목록에서 삭제한다
- _검색결과에서 + 버튼 클릭시 즐겨찾기 목록에 추가한다_
- _책 제목이 긴 경우 ...로 입력_
- _해당 항목 클릭하면 상세 책정보 페이지로 이동_
- _즐겨찾기 목록 순서편집 가능_

## &#128565; 고민과 문제해결
- Drag and drop을 구현하고싶다
    - jquery를 이용하지 않을 수 있는 방법은 없을까? --> 있지 !
    - 'drag' 이벤트를 이용하니까 드래깅하는 모든 순간 event를 호출..dragstart 이벤트를 이용
    - drag 항목의 index를 알아낼 때 for문을 이용해 해당 값을 다 비교하는 방법 말고는 없을까? --> li tag data set에 idx를 처음부터
- LocalStorage에 저장하는게 나을까, SessionStorage에 저장하는 게 나을까?
	- 우선 local storage에 저장했음. sesseion storage와의 차이와 사용법을 더 공부해야한다
- 즐겨찾기 목록에 저장되는 글자 제목이 너무 길다 -- string 내장함수로 간단히 해결. css overflow로도 해결할 수 있음
- a tag를 안 쓰고 손모양을 바꿀 수 있는 방법은? 
	- hover에 cursor를 바꾸면됨

##  &#127752; 새로 알게 된 내용
- __lite-server__ : html, css, js의 간단한 구동과 테스트를 가능하게 한다
    - npm install -g lite-server
- __Object.create(proto[,propertiesObject])__ : 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만든다
    - 반환값 : 지정된 프로토타입 개체와 속성을 갖는 새로운 개체
- __targetEvent.dispatchEent()__ : 영향을 받는 EventListener 를 적절한 순서로 호출하는 지정된 EventTarget 에서 Event 를 (동기적으로) 디스패치한다. 일반 이벤트 처리 규칙(capturing 과 선택적인 bubbling 단계를 포함해)은 dispatchEvent() 를 사용하여 수동으로 전달 된 이벤트에도 적용된다
- __emit__ : 이벤트를 다른 컴포넌트로 넘김
- __reduce의 initial Value__
    - arr.reduce(callback[, initialValue])
    - callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생함
- __Array.from()__ : 유사 배열 또는 반복 가능한 객체로부터 새로운 Array 인스턴스를 생성한다
- __event bind()와 addEventListener()__ : 이벤트를 html에 직접 선언하지 않고 바인딩하는 방식
- __event.stopPropagation()__ : 이벤트의 버블링을 막는 메서드
- __뷰 사용법__
    - CDN 이용
    - 뷰 인스턴스 생성

- __@event.prevent__     : event.preventDefault()와 같은 기능
v - __computed__ : 복잡한 표현식 대신 함수로 사용할 수 있다  
v- __watch__ : vue 모델을 감시하고 있다가 어떤 값이 변경되면 실행되는 함수 
v - __toast 관련__ : css(translate, transition, z-index), clearTimeout
v - __drag & drop__ : dataTransfer,  

`;
const PostContents = (props) => {
  return (
    <Container>
      <Contents>{contents}</Contents>
    </Container>
  );
};

PostContents.defaultProps = {};

const Container = styled.div`
  margin: 3rem auto;
`;
const Contents = styled.div`
  max-width: 768px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default PostContents;
