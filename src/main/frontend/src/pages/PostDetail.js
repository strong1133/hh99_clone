import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Text, Image, Button, Wrapper } from '../elements';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import Comment from '../components/Comment/Comment';
import PostHeader from '../components/PostDetail/PostHeader';
import PostContents from '../components/PostDetail/PostContents';
import Header from '../components/Header';

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
       <Header author={author} />
      <PostHeader />
      <PostContents />
      <Footer>
        <UserInfo>
          <div className="header">
            <Image
              src={image}
              shape="circle"
              size="8rem"
              margin="0 4px 0 0"
            ></Image>
            <div className="meta">
              <span className="name">{author}</span>
              <span className="userInfo">User 소개글같은거</span>
            </div>
          </div>
          <div className="line"></div>
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
            <hr />
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
  ${(props) => props.theme.flex_column};
  justify-content: flex-start;
  width: 100%;
  & div.header {
    ${(props) => props.theme.default_width};
    ${(props) => props.theme.flex_row};
    justify-content: flex-start;
    & div.meta {
      padding-left: 1.5rem;
      ${(props) => props.theme.flex_column};
      justify-content: center;
      align-items: flex-start;

      & span.name {
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: bold;
      }

      & span.userInfo {
        font-size: 1.125rem;
        line-height: 1.5;
        margin-top: 0.25rem;
        color: rgb(73, 80, 87);
        letter-spacing: -0.004em;
      }
    }
  }

  & div.line {
    background: rgb(233, 236, 239);
    width: 100%;
    height: 1px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
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
