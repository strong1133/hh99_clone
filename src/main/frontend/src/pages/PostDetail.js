import React from 'react';
import styled from 'styled-components';
import PostContents from '../components/PostContents';
import PostHeader from '../components/PostHeader';
import { Grid, Text, Image, Button, Wrapper } from '../elements';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const PostDetail = (props) => {
  return (
    <Wrapper is_column bg="white">
      <PostHeader />
      <PostContents />
      <Footer>
        <UserInfo>
          <Image shape="circle" size="5rem" margin="0 4px 0 0"></Image>
          <div>
            <b>Hello</b>
            <Text>world react</Text>
          </div>
        </UserInfo>
        <Wrapper width="100%" jc="space-between">
          <NextPrev>
            <I>
              <FaArrowLeft />
            </I>
            <div>
              <p>이전 포스트</p>
              <h3>프론트 개발자 면접 정리</h3>
            </div>
          </NextPrev>
          <NextPrev is_right>
            <div>
              <p>다음 포스트</p>
              <h3>프론트 개발자 면접 정리</h3>
            </div>
            <I className="icon">
              <FaArrowRight />
            </I>
          </NextPrev>
        </Wrapper>
      </Footer>
    </Wrapper>
  );
};

const Footer = styled.div`
  ${(props) => props.theme.flex_column}
  width: 100%;
  padding: 0 1rem;
  max-width: ${(props) => props.theme.max_width};
`;
const UserInfo = styled.div`
  width: 100%;
  ${(props) => props.theme.flex_row}
  justify-content:flex-start;

  & > div {
    background-color: pink;
    margin-left: 1rem;
    ${(props) => props.theme.flex_column};
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  & b {
    font-size: 1.125rem;
  }
`;

const NextPrev = styled.div`
  background-color: ${(props) => props.theme.gray};
  padding-left: 0 1rem;
  height: 4rem;
  ${(props) => props.theme.flex_row}
  text-align: ${(props) => (props.is_right ? 'right' : 'left')};
  width: 50%;
  ${(props) => (props.is_right ? 'margin-left:10px' : 'margin-right:10px')};

  &:hover .icon {
    transform: ${(props) =>
      props.is_right ? 'translateX(10px)' : 'translateX(-10px)'};
  }
`;

const I = styled.span`
  width: 32px;
  height: 32px;
  ${(props) => props.theme.flex_row}
  justify-content:center;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.velog_green};
  margin: 0 2px;

  & * {
    color: ${(props) => props.theme.velog_green};
    font-size: 0.9rem;
  }
`;
export default PostDetail;
