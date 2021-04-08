import React, { useEffect } from 'react';

import { Wrapper } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import Comment from '../components/Comment/Comment';
import PostHeader from '../components/PostDetail/PostHeader';
import PostContents from '../components/PostDetail/PostContents';
import Header from '../components/Header';
import PostFooter from '../components/PostDetail/PostFooter';

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
<<<<<<< HEAD
       <Header author={author} />
      <PostHeader />
=======
      <Header author={author} />
      <PostHeader history={props.history} />
>>>>>>> ykk
      <PostContents />
      <PostFooter author={author} />
      <Comment id={postId} />
    </Wrapper>
  );
};

export default PostDetail;
