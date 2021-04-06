import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../shared/useInput';
import CommentItem from './CommentItem';
import { actionCreators as commentActions } from '../../redux/modules/comment';
import CommentWrite from './CommentWrite';

const Comment = (props) => {
  const [comment, onChagneComent, setComment] = useInput('');
  //const [comment, setComment] = useState('');
  const commentList = useSelector((state) => state.comment.commentList);

  const postId = props.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentActions.readComment(postId));
  }, []);

  const registComment = (e) => {
    console.log(comment);
    const data = {
      username: '마농바게트', //TODO : user
      contents: comment,
      articleId: postId
    };
    dispatch(commentActions.createComment(data));
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
        type="insert"
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
  ${(props) => props.theme.flex_column};
  ${(props) => props.theme.default_width};
`;

const CommnetList = styled.div`
  ${(props) => props.theme.default_width};
`;

export default Comment;
