import React from 'react';
import styled from 'styled-components';
import useInput from '../../shared/useInput';
import HashTag from '../../elements/HashTag';

const PostWriteHeader = (props) => {
  const { title, _onChange, hashTagList, setHashTagList } = props;

  const [value, onChangeValue, setValue] = useInput('');
  // 해쉬태그 입력 이벤트, 중복값은 입력불가
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      if (hashTagList.indexOf(value) < 0) {
        setHashTagList([...hashTagList, value]);
      }
      setValue('');
    }
  };

  // 클릭하면 삭제
  const removeHashTag = (e) => {
    const idx = hashTagList.indexOf(e.target.innerHTML);

    hashTagList.splice(idx, 1);

    setHashTagList([...hashTagList]);
  };

  return (
    <Wrapper>
      <Title
        placeholder="제목을 입력하세요"
        onChange={_onChange}
        value={title || ''}
      ></Title>
      <Line />

      <HashTagWrapper>
        {hashTagList.map((h, idx) => {
          return (
            <HashTag key={idx} idx={idx} _onClick={removeHashTag}>
              {h}
            </HashTag>
          );
        })}
        <Input
          type="text"
          onKeyPress={onEnter}
          onChange={onChangeValue}
          value={value || ''}
          placeholder="태그를 입력하세요"
        />
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
  ${(props) => props.theme.flex_row};
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Input = styled.input`
  outline: none;
  border: none;
  line-height: 1.5rem;
  font-size: 0.75rem;
`;
export default PostWriteHeader;
