import React from 'react';
import styled from 'styled-components';
const PostWriteHeader = (props) => {
  const { title, _onChange } = props;

  return (
    <Wrapper>
      <Title
        placeholder="제목을 입력하세요"
        onChange={_onChange}
        value={title || ''}
      ></Title>
      <Line />
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

export default PostWriteHeader;
