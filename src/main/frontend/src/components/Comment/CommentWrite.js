import React from 'react';
import styled from 'styled-components';
const CommentWrite = (props) => {
  const { value, _onChange, _onCancle, _onSubmit, type } = props;

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

CommentWrite.defaultValue = {
  value: '',
  _onChange: () => {},
  _onCancle: () => {},
  _onSubmit: () => {},
  type: '2'
};

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
      border: none;
      border-radius: 4px;
      padding: 0px 1.25rem;
      height: 2rem;
      font-size: 1rem;
    }

    & button.cancel {
      background-color: gray;
    }

    & button.submit {
      background-color: ${(props) => props.theme.velog_green};
    }
  }
  & textarea {
    box-sizing: border-box;
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
