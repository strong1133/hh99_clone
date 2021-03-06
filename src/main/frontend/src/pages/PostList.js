// 메인 화면
import React from 'react';
import styled from 'styled-components';

import PostListTab from '../components/PostList/PostListTab.js';
import Header from '../components/Header';

// 구성: Main Header + PostListTab
const PostList = (props) => {
  return (
    <React.Fragment>
      <Responsive>
        <Header
          toWrite={() => {
            props.history.push('/write');
          }}
        />
        <PostListTab />
      </Responsive>
    </React.Fragment>
  );
};

const Responsive = styled.div`
  ${(prop) => prop.theme.responsiveContainer};
  max-width: 1444px;
`;

export default PostList;
