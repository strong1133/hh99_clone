import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Text, Image, Button, Wrapper } from '../elements';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import Comment from '../components/Comment/Comment';
import PostHeader from '../components/PostDetail/PostHeader';
import PostContents from '../components/PostDetail/PostContents';

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const postId = props.match.params.id;

  const detailPost = useSelector((state) => state.post.detailPost);
  const { author, image } = detailPost;
  useEffect(() => {
    dispatch(postActions.fetchPostById(postId));
  }, []);

  return (
    <Wrapper is_column bg="white">
      <PostHeader />
      <PostContents />
      <Footer>
        <UserInfo>
          <Image
            src={image}
            shape="circle"
            size="5rem"
            margin="0 4px 0 0"
          ></Image>
          <div>
            <b>{author}</b>
            <Text>User 소개글같은거</Text>
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
      <Comment id={postId} />
    </Wrapper>
  );
};

const Footer = styled.div`
  ${(props) => props.theme.default_width};
  ${(props) => props.theme.flex_column}

  padding: 0 1rem;
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
