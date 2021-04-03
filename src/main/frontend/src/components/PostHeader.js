import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Wrapper } from '../elements';
import { ReactComponent as Heart } from '../static/heart.svg';

import I from '../elements/I';
import PostProjectBox from './PostProjectBox';
const PostHeader = () => {
  const [isLike, setIsLike] = useState(false);

  const toggleLike = () => {
    setIsLike(!isLike);
  };
  return (
    <Header bg="white" is_column ai="flex-start">
      <Title>웹 개발 작업을 더 쉽고 효과적으로 만들어주는 유용한 도구들!</Title>

      <Infomation jc="space-between">
        <span>
          <b>openhub</b> · 2021년 3월 13일{' '}
        </span>
        <Like is_like={isLike} onClick={toggleLike}>
          <Heart />
          <Text color={isLike ? 'white' : '#adb5bd'} bold size="1em">
            10000123123
          </Text>
        </Like>
      </Infomation>

      <Wrapper jc="flex-start">
        <HashTag> 해시태그 컴포넌트</HashTag>
      </Wrapper>
      <PostProjectBox />
    </Header>
  );
};

const Header = styled.div`
  max-width: 768px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const Title = styled.h1`
  text-align: left;
`;

const Like = styled.div`
  border: 1px solid;
  padding: 0 0.75rem;
  height: 1.3rem;
  border-radius: 0.75rem;
  font-size: 12px;

  ${(props) => props.theme.flex_row};
  justify-content: space-between;
  margin-bottom: 0.75rem;
  ${(props) =>
    props.is_like
      ? `background-color:${props.theme.velog_green}; border-color:${props.theme.velog_green}; color:white;`
      : `background-color: #ffffff; border-color:${props.theme.gray}; border-color:${props.theme.gray}; color:${props.theme.gray};`}; /* background-color: ${(
    props
  ) => (props.is_like ? props.theme.velog_green : props.theme.gray)}; */
  // 사이즈 줄어들면 안보이게 처리
`;

const HashTag = styled.div`
  ${(props) => props.theme.flex_row};
  color: ${(props) => props.theme.velog_green};
  background-color: ${(props) => props.theme.post_bg};
  padding: 0 0.75rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  font-size: 12px;
  margin: 0.5rem 0;
`;

const Infomation = styled.div`
  font-size: 0.875rem;
  ${(props) => props.theme.flex_row}
  justify-content:space-between;
  width: 100%;
`;
export default PostHeader;
