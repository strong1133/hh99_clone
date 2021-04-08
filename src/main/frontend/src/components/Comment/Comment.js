import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../shared/useInput';
import CommentItem from './CommentItem';
import { actionCreators as commentActions } from '../../redux/modules/comment';
import CommentWrite from './CommentWrite';

const Comment = (props) => {
  const [comment, onChagneComent, setComment] = useInput('');
  const nickname = useSelector((state) => state.user.user?.nickname);
  const commentList = useSelector((state) => state.comment.commentList);

  const postId = props.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentActions.readComment(postId));
  }, []);

  const registComment = (e) => {
    if (!nickname) {
      return alert('먼저 로그인해주세요');
    }
    const data = {
      username: nickname, //TODO : user
      contents: comment,
      articleId: postId
    };
    dispatch(commentActions.createComment(data));
    setComment('');
  };

  /*   const resize = (e) => {
    console.log(e.target.style.height);
  }; */
  return (
    <CommentContainer>
      <h3>{commentList.length}개의 댓글</h3>
      <CommentWrite
        value={comment}
        _onChange={onChagneComent}
        type="1"
        _onSubmit={registComment}
      ></CommentWrite>
      <CommnetList>
        {commentList.map((c) => {
          return <CommentItem key={c.id} {...c} />;
        })}
      </CommnetList>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  ${(props) => props.theme.default_width};
  ${(props) => props.theme.flex_column};
  align-items: flex-start;
`;

const CommnetList = styled.div`
  margin: 2rem 0;
  ${(props) => props.theme.max_width};
  width: 100%;
`;

export default Comment;
