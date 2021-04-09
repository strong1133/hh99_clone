import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Heart } from '../../static/heart.svg';
import moment from 'moment';
import 'moment/locale/ko';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Wrapper } from '../../elements';
import { actionCreators as postActions } from '../../redux/modules/post';
import HashTag from '../../elements/HashTag';

const PostHeader = (props) => {
  const dispatch = useDispatch();

  // 좋아요 바꿀 버튼
  const [isLike, setIsLike] = useState(false);

  // store에서 user nickname 가져오기
  const nickname = useSelector((state) => state.user.user?.nickname);

  // store에서 포스트 상세정보 가져오기
  const detailPost = useSelector((state) => state.post.detailPost);
  const { createdAt, author, modifiedAt, image, liked, title, id } = detailPost;

  // 좋아요 이벤트
  const toggleLike = () => {
    setIsLike(!isLike);
  };

  // 게시글 수정
  const onEdit = (e) => {
    props.history.push(`/write/${id}`);
  };

  // 게시글 삭제
  const onDelete = () => {
    const isConfirmed = window.confirm('정말로 게시물을 삭제하시겠습니까?');
    if (!isConfirmed) return;
    dispatch(postActions.deletePost(id));
  };

  return (
    <Header bg="white" is_column ai="flex-start">
      <Title>{title}</Title>
      {/* 날짜, 좋아요, 수정/삭제 버튼 */}
      <Infomation>
        <div className="line">
          <span>
            <b>{author}</b> &nbsp;·&nbsp;
            {modifiedAt
              ? moment(modifiedAt).format('YYYY년 MM월 DD일')
              : moment(createdAt).format('YYYY년 MM월 DD일')}
          </span>

          <Like is_like={isLike} onClick={toggleLike}>
            <Icon>
              <Heart fill="red" />
            </Icon>
            <Text color={isLike ? 'white' : '#adb5bd'} bold size="1em">
              {liked}
            </Text>
          </Like>
        </div>
        {/* 내가 쓴 글만 수정/삭제 가능 */}
        {author === nickname && (
          <Buttons>
            <span onClick={onEdit}>수정</span>
            <span onClick={onDelete}>삭제</span>
          </Buttons>
        )}
      </Infomation>
      {/* 해시태그 */}
      <Wrapper jc="flex-start">
        <HashTag> 해시태그</HashTag>
      </Wrapper>
    </Header>
  );
};

const Header = styled.div`
  ${(props) => props.theme.default_width};
  padding: 0 1rem;
  margin-top: 1rem;

  @media ${(props) => props.theme.desktop} {
    margin-top: 3rem;
  }
`;
const Title = styled.h1`
  text-align: left;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--roboto);
  line-height: 1.5;
  letter-spacing: -0.004em;
  font-weight: 800;
  color: rgb(52, 58, 64);
  word-break: keep-all;

  @media ${(props) => props.theme.desktop} {
    font-size: 3rem;
  }
`;

const Buttons = styled.div`
  ${(props) => props.theme.flex_row};
  justify-content: flex-end;
  margin: 1rem 0;

  & span {
    cursor: pointer;

    font-size: 1rem;
    color: ${(props) => props.theme.gray};
    &:first-child {
      margin-right: 0.5rem;
    }
  }
  @media ${(props) => props.theme.desktop} {
    width: 50%;
  }
`;
const Like = styled.div`
  border: 1px solid;
  padding: 0 0.75rem;
  height: 1.3rem;
  border-radius: 0.75rem;
  font-size: 12px;
  cursor: pointer;

  ${(props) => props.theme.flex_row};
  justify-content: space-between;
  margin-bottom: 0.75rem;
  ${(props) =>
    props.is_like
      ? `background-color:${props.theme.velog_green}; border-color:${props.theme.velog_green}; color:white;`
      : `background-color: #ffffff; border-color:${props.theme.gray}; border-color:${props.theme.gray}; color:${props.theme.gray};`};
  background-color: ${(props) =>
    props.is_like ? props.theme.velog_green : ''};

  & svg {
    fill: red;
  }
  // 사이즈 줄어들면 안보이게 처리
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

const Infomation = styled.div`
  font-size: 0.875rem;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column-reverse;

  & div.line {
    ${(props) => props.theme.flex_row};
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media ${(props) => props.theme.desktop} {
      width: 50%;
    }
  }

  @media ${(props) => props.theme.desktop} {
    flex-direction: row;
  }
`;

const Icon = styled.div`
  margin-right: 0.7rem;
`;

export default PostHeader;
