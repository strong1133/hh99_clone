import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Image, Input, Text, Wrapper } from '../elements';
import useInput from '../shared/useInput';
import CommentItem from './CommentItem';
import { actionCreators as commentActions } from '../redux/modules/comment';

const Comment = (props) => {
  const [comment, onChagneComnent] = useInput('');

  const postId = props.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentActions.readComment(postId));
  }, []);
  const registComment = (e) => {
    console.log(comment);
    // axios username, contents, articleId
  };

  const resize = (e) => {
    console.log(e.target.style.height);
  };
  return (
    <CommentContainer>
      <CommentWrite>
        <h3>6개의 댓글</h3>
        <textarea
          onKeyDown={resize}
          placeholder="댓글을 작성하세요"
          value={comment}
          onChange={onChagneComnent}
        ></textarea>
        <div className="button-wrapper">
          <button onClick={registComment}>댓글 작성</button>
        </div>
      </CommentWrite>
      <CommnetList>
        <CommentItem />
      </CommnetList>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  ${(props) => props.theme.flex_column};
  ${(props) => props.theme.default_width};
`;

const CommentWrite = styled.div`
  ${(props) => props.theme.flex_column};
  ${(props) => props.theme.default_width};
  ${(props) => props.theme.max_width}

  align-items: flex-start;

  & * {
    margin: 0.5rem 0;
  }

  & div.button-wrapper {
    width: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;

    & button {
      color: white;
      background-color: ${(props) => props.theme.velog_green};
      border: none;
      border-radius: 4px;
      padding: 0px 1.25rem;
      height: 2rem;
      font-size: 1rem;
    }
  }
  & textarea {
    resize: none;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid ${(props) => props.theme.gray};
    margin-bottom: 1.5rem;
    width: 96%;
    border-radius: 4px;
    min-height: 6.125rem;
    font-size: 1rem;
    color: rgb(33, 37, 41);
    line-height: 1.75;

    &::placeholder {
      color: ${(props) => props.theme.gray};
    }
  }
`;
const CommnetList = styled.div`
  ${(props) => props.theme.default_width};
`;

export default Comment;
