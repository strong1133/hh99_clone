import React from 'react';
import styled from 'styled-components';
import PostHeader from '../components/PostHeader';
import { Grid, Text, Image, Button, Wrapper } from '../elements';

const PostDetail = (props) => {
  return (
    <Wrapper is_column bg="white">
      <PostHeader />
      <div className="ContentContainer">
        <div>Contents</div>
      </div>
      <div className="Footer">
        <div className="user">
          <div>사진|유저이름</div>
          <hr />
          <div>깃 트위터 메일</div>
        </div>
        <div>이전포스트 다음포스트</div>
      </div>
    </Wrapper>
  );
};

export default PostDetail;
