import React, { useRef } from 'react';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useInput from '../shared/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import PostWriteHeader from '../components/PostWrite/PostWriteHeader';

// 수정
const PostWrite = (props) => {
  const editorRef = useRef();
  const [title, onChangeTitle] = useInput('');

  const submit = () => {
    //console.log(editorRef.current.getInstance().getHtml());
    console.log(title);
  };
  return (
    <React.Fragment>
      <Container>
        <Title placeholder="제목을 입력하세요" onChange={onChangeTitle}></Title>
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          initialEditType="markdown"
          previewHighlight={false}
          placeholder="당신의 이야기를 적어보세요...."
          height="85vh"
          width="100%"
        ></Editor>
      </Container>
      <Footer>
        <button className="exit">
          <AiOutlineArrowLeft />
          <span>나가기</span>
        </button>
        <div className="buttons">
          <button>임시저장</button>
          <button onClick={submit}>출간하기</button>
        </div>
      </Footer>
    </React.Fragment>
  );
};

PostWrite.propTypes = {};

const Container = styled.div`
  ${(props) => props.theme.border_box};
  padding: 0 1rem;
`;

const Title = styled.input``;

const Footer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100%;
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
  width: 100vw;

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

    & span {
      margin-left: 0.5rem;
      font-weight: 450;
    }
  }
`;

export default PostWrite;
