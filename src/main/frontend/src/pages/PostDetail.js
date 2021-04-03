import React from 'react';
import styled from 'styled-components';

import { Grid, Text, Image, Button } from '../elements';

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <div className="header">
        <div>웹 개발 작업을 더 쉽고 효과적으로 마들어주는 유용한 도구들!</div>
        <div>
          <b>openhub</b>· 2021년 3월 13일{' '}
        </div>
        <div>하트 좋아요 개수</div>
        <div>해시태그 컴포넌트</div>
      </div>

      <div>프로젝트박스</div>
      <div>Contents</div>
    </React.Fragment>
  );
};

export default PostDetail;
