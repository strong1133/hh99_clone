import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useInput from '../shared/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import PostWriteHeader from '../components/PostWrite/PostWriteHeader';
// hashtag cnrk
const PostWrite = (props) => {
  const articleId = props.match.params.id;
  const dispatch = useDispatch();
  const detailPost = useSelector((state) => state.post.detailPost);
  const [hashTagList, setHashTagList] = useState([]); //articleId?detailPost.hashTag:[]
  const editorRef = useRef();
  const [title, onChangeTitle] = useInput(articleId && detailPost.title);

  const submit = () => {
    /* const contents = editorRef.current
      .getInstance()
      .getTextObject()
      .setRange(20); */

    const contents = '프리뷰가 들어가야하넌디...';

    const contentsHtml = editorRef.current.getInstance().getHtml();
    const contentsMd = editorRef.current.getInstance().getMarkdown();
    const image = contentsHtml.split('=')[1]?.split('"')[1];

    if (!title || !contentsMd) return;
    // TODO : preview 처리
    // TODO : image
    const post = {
      title,
      contents,
      contentsHtml,
      contentsMd,
      author: 'ouo_',
      hashTag: hashTagList,
      image
    };

    if (articleId) {
      dispatch(postActions.updatePost(articleId, post));
    } else {
      dispatch(postActions.createPost(post));
    }
  };
  return (
    <React.Fragment>
      <Container>
        <PostWriteHeader
          hashTagList={hashTagList}
          setHashTagList={setHashTagList}
          title={title}
          _onChange={onChangeTitle}
        />
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          initialEditType="markdown"
          initialValue={articleId && detailPost.contentsMd}
          previewHighlight={false}
          placeholder="당신의 이야기를 적어보세요...."
          height="75vh"
        ></Editor>
      </Container>
      <Footer>
        <button
          className="exit"
          onClick={() => {
            props.history.push('/');
          }}
        >
          <AiOutlineArrowLeft />
          <span>나가기</span>
        </button>
        <Buttons>
          <button className="cancle">임시저장</button>
          <button className="submit" onClick={submit}>
            출간하기
          </button>
        </Buttons>
      </Footer>
    </React.Fragment>
  );
};

PostWrite.propTypes = {};

const Container = styled.div`
  ${(props) => props.theme.border_box};
  padding: 0 1rem;
  width: 100vw;
`;

const Footer = styled.div`
  ${(props) => props.theme.border_box};
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100vw;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: white;

  & button.exit {
    height: 2.5rem;
    padding: 0.5rem 1rem;
    -webkit-box-align: center;
    display: flex;
    align-items: center;
    background: none;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 1.125rem;

    &:hover {
      background-color: rgb(233, 236, 239);
    }

    & span {
      margin-left: 0.5rem;
      font-weight: 450;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;

  & button {
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    outline: none;
  }

  & button.cancle {
    margin-right: 0.75rem;
    background: rgb(233, 236, 239);
    color: rgb(73, 80, 87);

    &:hover {
      background-color: rgb(233, 236, 239, 0.7);
    }
  }

  & button.submit {
    background-color: ${(props) => props.theme.velog_green};
    &:hover {
      background-color: ${(props) => props.theme.velog_green_h};
    }
  }
`;

export default PostWrite;
