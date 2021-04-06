import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Heart } from '../../static/heart.svg';
import moment from 'moment';
import 'moment/locale/ko';
import { useSelector } from 'react-redux';
import { Text, Wrapper } from '../../elements';
import PostProjectBox from './PostProjectBox';
const PostHeader = () => {
  const [isLike, setIsLike] = useState(false);
  const detailPost = useSelector((state) => state.post.detailPost);
  const { createdAt, author, modifiedAt, image, liked, title } = detailPost;
  const toggleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <Header bg="white" is_column ai="flex-start">
      <Title>{title}</Title>

      <Infomation jc="space-between">
        <span>
          <b>{author}</b> ·{' '}
          {modifiedAt
            ? moment(modifiedAt).format('YYYY년 MM월 DD일')
            : moment(createdAt).format('YYYY년 MM월 DD일')}
        </span>
        <Like is_like={isLike} onClick={toggleLike}>
          <Icon>
            <Heart fill="red" />
          </Icon>
          <Text color={isLike ? 'white' : '#adb5bd'} bold size="1em">
            {liked}
          </Text>
        </Like>
      </Infomation>

      <Wrapper jc="flex-start">
        <HashTag> 해시태그</HashTag>
      </Wrapper>
    </Header>
  );
};

const Header = styled.div`
  ${(props) => props.theme.border_box};
  width: 100%;
  max-width: 768px;
  padding: 0 1rem;
`;
const Title = styled.h1`
  text-align: left;
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: rgb(52, 58, 64);
  margin-bottom: 2rem;
  word-break: keep-all;
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
  cursor: pointer;
`;

const Infomation = styled.div`
  font-size: 0.875rem;
  ${(props) => props.theme.flex_row}
  justify-content:space-between;
  width: 100%;
`;

const Icon = styled.div`
  margin-right: 0.7rem;
`;

export default PostHeader;
