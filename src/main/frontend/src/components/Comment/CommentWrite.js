import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const CommentWrite = (props) => {
  const { value, _onCancle, _onChange, _onSubmit, type } = props;

  return (
    <CommentInput>
      <textarea
        value={value}
        placeholder="댓글을 작성하세요"
        onChange={_onChange}
      ></textarea>
      <div className="button-wrapper">
        {type !== '1' && (
          <button className="cancel" onClick={_onCancle}>
            취소
          </button>
        )}
        <button className="submit" onClick={_onSubmit}>
          {type === '3' ? '댓글 수정' : '댓글 작성'}
        </button>
      </div>
    </CommentInput>
  );
};

CommentWrite.defaultProps = {
  value: '',
  _onChange: () => {},
  _onCancle: () => {},
  _onSubmit: () => {
    console.log('댓글 작성');
  },
  type: '2'
};

const CommentInput = styled.div`
  box-sizing: border-box;

  ${(props) => props.theme.flex_column};
  width: 100%;
  /* ${(props) => props.theme.default_width};
  ${(props) => props.theme.max_width} */

  align-items: flex-start;

  & div.button-wrapper {
    width: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;

    & button {
      cursor: pointer;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0px 1.25rem;
      height: 2rem;
      font-size: 1rem;
    }

    & button.cancel {
      background-color: gray;
      margin-right: 0.5rem;
      &:hover {
        background-color: rgb(118, 118, 118, 0.7);
      }
    }

    & button.submit {
      background-color: ${(props) => props.theme.velog_green};
      &:hover {
        background-color: ${(props) => props.theme.velog_green_h};
      }
    }
  }
  & textarea {
    box-sizing: border-box;
    width: 100%;
    resize: none;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid ${(props) => props.theme.gray};
    margin-bottom: 1rem;
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
