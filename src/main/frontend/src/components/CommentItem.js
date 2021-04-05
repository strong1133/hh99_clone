import React, { useState } from 'react';
import styled from 'styled-components';
import { Image, Text, Wrapper } from '../elements';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
const CommentItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Header>
        <Image shape="circle" size="2.5rem" />
        <CommentInfo>
          <b>jerryjnim_</b>
          <span>2021년 3월 25일</span>
        </CommentInfo>
      </Header>
      <Contents>
        <div>
          멋져요! 공유감사합니다! <br />
          생각지 못해본 질문 도 있네요. 그 자리에서는 대답하기 정말 힘들 것
          같네요 ㅠㅠ
          <br />
          <br /> 저는 생각에 과제의 우선순위에 1순위로 요구사항 파악이라
          생각합니다.
        </div>
      </Contents>

      <Reply
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <span>
            <AiOutlinePlusSquare />
            <b>1개의 답글</b>
          </span>
        ) : (
          <span
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineMinusSquare />
            <b>숨기기</b>
          </span>
        )}
      </Reply>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  ${(props) => props.theme.flex_column};
  align-items: flex-start;
`;

const Header = styled.div`
  ${(props) => props.theme.flex_row}
`;

const CommentInfo = styled.div`
  ${(props) => props.theme.flex_column};
  justify-content: center;
  align-items: flex-start;
  margin-left: 0.5rem;

  & b {
    font-size: 0.875rem;
  }

  & span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.gray};
  }
`;

const Contents = styled.div`
  padding: 0 0.4rem;
  margin: 1rem 0;
`;

const Reply = styled.div`
  padding: 0 0.4rem;
  cursor: pointer;
  & span {
    ${(props) => props.theme.flex_row};
    color: ${(props) => props.theme.velog_green};

    & * {
      color: ${(props) => props.theme.velog_green};
    }

    & b {
      margin-left: 0.5rem;
    }
  }
`;
export default CommentItem;
