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

  // article/:postId
  const postId = props.match.params.id;

  const detailPost = useSelector((state) => state.post.detailPost);
  const { author, image } = detailPost;

  // postId로 상세포스트 데이터를 가져와 store에 저장
  useEffect(() => {
    dispatch(postActions.fetchPostById(postId));
  }, []);

  return (
    <Wrapper is_column bg="white">
      {/* header에 글쓰기버튼 헤더에 전달 */}
      <Header
        toWrite={() => {
          props.history.push('/write');
        }}
        author={author}
      />
      {/* 포스트 헤더, 본문내용, 댓글 */}
      <PostHeader history={props.history} />
      <PostContents />
      <PostFooter author={author} />
      <Comment id={postId} />
    </Wrapper>
  );
};

export default PostDetail;
