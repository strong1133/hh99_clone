import React, { useState } from 'react';
import styled from 'styled-components';
import { Image, Text, Wrapper } from '../elements';

const CommentItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper is_column ai="flex-start">
      <Wrapper>
        <Image shape="circle" />
        <Wrapper bg="yellow" is_column ai="flex_start">
          <Text bold>jerryjnim_</Text>
          <Text>2021년 3월 25일</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper>sdfsdfsdfsdfsdf</Wrapper>
      <Wrapper>
        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? '+1개의 답글' : '- 숨기기'}
        </span>
      </Wrapper>
    </Wrapper>
  );
};

export default CommentItem;
