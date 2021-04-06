import React from 'react';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const PostWrite = (props) => {
  return (
    <div>
      <Editor previewStyle="vertical"></Editor>
    </div>
  );
};

PostWrite.propTypes = {};

const Container = styled.div`
  ${(props) => props.theme.default_width};

  background-color: pink;
`;

export default PostWrite;
