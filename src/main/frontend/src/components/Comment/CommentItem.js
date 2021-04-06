import React, { useState } from 'react';
import styled from 'styled-components';
import { Image, Text, Wrapper } from '../../elements';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../../redux/modules/comment';

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const { id, username, contents, createdAt, modifiedAt, aricleId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const editComment = () => {
    dispatch(commentActions.updateComment(id, { content: '하하호호' }));
  };

  const deleteComment = () => {
    dispatch(commentActions.deleteComment(id));
  };
  return (
    <Container>
      <Header>
        <Wrapper is_row>
          <Image shape="circle" size="2.5rem" />
          <CommentInfo>
            <b>{username}</b>
            <span>
              {' '}
              {modifiedAt !== createdAt
                ? moment(modifiedAt).format('YYYY년 MM월 DD일')
                : moment(createdAt).format('YYYY년 MM월 DD일')}
            </span>
          </CommentInfo>
        </Wrapper>
        <div className="buttons">
          <span onClick={editComment}>수정</span>
          <span onClick={deleteComment}>삭제</span>
        </div>
      </Header>
      <Contents>{contents}</Contents>

      <Reply
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <span
            onClick={() => {
              setIsOpen(!isOpen);
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
      </Reply>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

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

const Reply = styled.div`
  padding: 0 0.4rem;
  cursor: pointer;
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
export default CommentItem;
