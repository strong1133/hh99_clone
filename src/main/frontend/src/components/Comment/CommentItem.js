import React, { useState } from 'react';
import styled from 'styled-components';
import { Image, Text, Wrapper } from '../../elements';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../../redux/modules/comment';
import CommentWrite from './CommentWrite';
import useInput from '../../shared/useInput';

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.user.user?.nickname);
  const { id, username, contents, createdAt, modifiedAt, aricleId } = props;
  const [isOpenReply, setIsOpenReply] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [value, onChangeValue, setValue] = useInput(contents);
  const editComment = () => {
    dispatch(commentActions.updateComment(id, { contents: value }));
    setIsOpenEdit(false);
  };

  const deleteComment = () => {
    dispatch(commentActions.deleteComment(id));
  };
  const onCancle = () => {
    setValue(contents);
    setIsOpenEdit(!isOpenEdit);
  };
  return (
    <Container>
      <Header>
        <Wrapper is_row>
          <Image shape="circle" size="2.5rem" />
          <CommentInfo>
            <b>{username}</b>
            <span>
              {modifiedAt !== createdAt
                ? moment(modifiedAt).format('YYYY년 MM월 DD일')
                : moment(createdAt).format('YYYY년 MM월 DD일')}
            </span>
          </CommentInfo>
        </Wrapper>
        {nickname === username && (
          <div className="buttons">
            <span onClick={onCancle}>수정</span>
            <span onClick={deleteComment}>삭제</span>
          </div>
        )}
      </Header>
      {!isOpenEdit && <Contents>{contents}</Contents>}
      {isOpenEdit && (
        <CommentWrite
          type="3"
          value={value}
          _onChange={onChangeValue}
          _onCancle={onCancle}
          _onSubmit={editComment}
        />
      )}

      <ReplyWrapper>
        <ReplyHeader
          onClick={() => {
            setIsOpenReply(!isOpenReply);
          }}
        >
          {isOpenReply ? (
            <span
              onClick={() => {
                setIsOpenReply(!isOpenReply);
              }}
            >
              <AiOutlineMinusSquare />
              <b>숨기기</b>
            </span>
          ) : (
            <span>
              <AiOutlinePlusSquare />
              <b>답글 달기</b>
            </span>
          )}
        </ReplyHeader>
        {isOpenReply && (
          <InputWrapper>
            <CommentWrite
              type="3"
              _onCancle={() => setIsOpenEdit(false)}
              _onSubmit={() => {
                alert('아직 지원하지 않아요 :)');
              }}
            />
          </InputWrapper>
        )}
      </ReplyWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  border-bottom: 1px solid rgb(233, 236, 239);
  ${(props) => props.theme.flex_column};
  align-items: flex-start;
`;

const Header = styled.div`
  ${(props) => props.theme.flex_row}
  justify-content:space-between;
  width: 100%;

  & .buttons {
    & span {
      cursor: pointer;
      margin-right: 0.5rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme.gray};
    }
  }
`;

const CommentInfo = styled.div`
  ${(props) => props.theme.flex_column};
  justify-content: center;
  align-items: flex-start;
  margin-left: 0.5rem;

  & b {
    font-size: 0.875rem;
  }

  & span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.gray};
  }
`;

const Contents = styled.div`
  padding: 0 0.4rem;
  margin: 1rem 0;
`;

const ReplyWrapper = styled.div`
  box-sizing: border-box;
  ${(props) => props.theme.max_width};
  width: 100%;
  padding: 0 0.4rem;
  cursor: pointer;
  ${(props) => props.theme.flex_column};
  align-items: flex-start;
  & span {
    ${(props) => props.theme.flex_row};
    color: ${(props) => props.theme.velog_green};

    & * {
      color: ${(props) => props.theme.velog_green};
    }

    & b {
      margin-left: 0.5rem;
    }
  }
`;

const ReplyHeader = styled.div``;

const InputWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.02);
  background-color: rgba(0, 0, 0, 0.016); //TODO :box-sizing
  padding: 1.5rem;
  border-radius: 4px;
  margin-top: 1.3125rem;
  width: 100%;
  ${(props) => props.theme.max_width};
  //${(props) => props.theme.flex_column}
`;
export default CommentItem;
