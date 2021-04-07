import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../shared/useInput';
import HashTag from '../../elements/HashTag';

const PostWriteHeader = (props) => {
  const { title, _onChange } = props;
  const [hashTagList, setHashTagList] = useState([]);
  const [value, onChangeValue] = useInput('');
  return (
    <Wrapper>
      <Title
        placeholder="제목을 입력하세요"
        onChange={_onChange}
        value={title || ''}
      ></Title>
      <Line />

      <HashTagWrapper>
        <HashTag>dsdf</HashTag>
        <HashTag>dsdf</HashTag>
        <HashTag>dsdf</HashTag>
        <HashTag>dsdf</HashTag>
        <Input type="text" placeholder="태그를 입력하세요" />
      </HashTagWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  ${(props) => props.theme.border_box}
`;

const Line = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.66rem;
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;
const Title = styled.input`
  font-size: 1.8rem;
  outline: none;
  border: none;
  font-weight: bold;
  width: 100%;
  ${(props) => props.theme.border_box}
`;

const HashTagWrapper = styled.div`
  background-color: pink;
  ${(props) => props.theme.flex_row};
  justify-content: flex-start;
`;

const Input = styled.input`
  outline: none;
  border: none;
  line-height: 1.5rem;
  font-size: 0.75rem;
`;
export default PostWriteHeader;
