import React, { useState } from 'react';
import styled from 'styled-components';
import { Image, Input, Text, Wrapper } from '../elements';
import useInput from '../shared/useInput';
import CommentItem from './CommentItem';
const Comment = (props) => {
  const [comment, onChagneComnent] = useInput('');

  const registComment = (e) => {
    console.log(comment);
    // axios
  };

  return (
    <CommentContainer>
      <CommentWrite>
        <h3>6개의 댓글</h3>
        <textarea value={comment} onChange={onChagneComnent}></textarea>
        <button onClick={registComment}>댓글 작성</button>
      </CommentWrite>
      <CommnetList>
        <CommentItem />
      </CommnetList>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  width: 96vw;
  ${(props) => props.theme.max_width}
  border:1px solid black;
  margin: 1rem 0;
  ${(props) => props.theme.flex_column}
  padding:0 2vw;
`;

const CommentWrite = styled.div`
  ${(props) => props.theme.flex_column};
  align-items: flex-start;
  background-color: pink;
`;

const CommnetList = styled.div``;

export default Comment;
