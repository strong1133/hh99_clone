import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const CommentWrite = (props) => {
  const { value, _onChange, _onCancle, _onSubmit, type } = props;

  return (
    <CommentInput>
      <textarea placeholder="댓글을 작성하세요" onChange={_onChange}></textarea>
      <div className="button-wrapper">
        <button onClick={_onSubmit}>댓글 작성</button>
      </div>
    </CommentInput>
  );
};

CommentWrite.propTypes = {};

const CommentInput = styled.div`
  ${(props) => props.theme.flex_column};
  ${(props) => props.theme.default_width};
  ${(props) => props.theme.max_width}

  align-items: flex-start;

  & * {
    margin: 0.5rem 0;
  }

  & div.button-wrapper {
    width: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;

    & button {
      cursor: pointer;
      color: white;
      background-color: ${(props) => props.theme.velog_green};
      border: none;
      border-radius: 4px;
      padding: 0px 1.25rem;
      height: 2rem;
      font-size: 1rem;
    }
  }
  & textarea {
    resize: none;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid ${(props) => props.theme.gray};
    margin-bottom: 1.5rem;
    width: 96%;
    border-radius: 4px;
    min-height: 6.125rem;
    font-size: 1rem;
    color: rgb(33, 37, 41);
    line-height: 1.75;

    &::placeholder {
      color: ${(props) => props.theme.gray};
    }
  }
`;

export default CommentWrite;
