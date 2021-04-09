import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Image, Wrapper } from '../../elements';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const PostFooter = (props) => {
  const { author } = props;
  return (
    <FooterWrapper>
      {/* 게시글 쓴 유저의 정보 */}
      <UserInfo>
        <div className="header">
          <Image shape="circle" size="8rem" margin="0 4px 0 0"></Image>
          <div className="meta">
            <span className="name">{author}</span>
            <span className="userInfo">성장하는 개발자입니다</span>
          </div>
        </div>
        <div className="line"></div>
      </UserInfo>
      {/* 이전포스트, 다음포스트 박스 */}
      <NextPrevWrapper width="100%" jc="space-between">
        <Prev className="box left">
          <I className="icon">
            <FaArrowLeft />
          </I>
          <div className="info">
            <p>이전 포스트</p>
            <h3>Stack vs Queue</h3>
          </div>
          <hr />
        </Prev>
        <Next className="box right">
          <div className="info">
            <p>다음 포스트</p>
            <h3>svg, canvas의 차이</h3>
          </div>
          <I className="icon">
            <FaArrowRight />
          </I>
        </Next>
      </NextPrevWrapper>
    </FooterWrapper>
  );
};

PostFooter.defaultProps = {};

const FooterWrapper = styled.div`
  ${(props) => props.theme.default_width};
  ${(props) => props.theme.flex_column};
  padding: 0 1rem;
`;
const UserInfo = styled.div`
  ${(props) => props.theme.flex_column};
  justify-content: flex-start;
  width: 100%;
  & div.header {
    ${(props) => props.theme.default_width};
    ${(props) => props.theme.flex_row};
    justify-content: flex-start;
    & div.meta {
      padding-left: 1.5rem;
      ${(props) => props.theme.flex_column};
      justify-content: center;
      align-items: flex-start;

      & span.name {
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: bold;
      }

      & span.userInfo {
        font-size: 1.125rem;
        line-height: 1.5;
        margin-top: 0.25rem;
        color: rgb(73, 80, 87);
        letter-spacing: -0.004em;
      }
    }
  }

  & div.line {
    background: rgb(233, 236, 239);
    width: 100%;
    height: 1px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
`;
// 화살표 hover 움직이는 animation
const moveRight = keyframes`
0%{
    transform:translateX(0px);
}

50%{
    transform:translateX(10px);
}

100% {
    transform:translateX(0px);
}`;

const moveLeft = keyframes`
0%{
    transform:translateX(0px);
}

50%{
    transform:translateX(-10px);
}

100% {
    transform:translateX(0px);
}`;

const NextPrevWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media ${(props) => props.theme.desktop} {
    flex-direction: row;

    justify-content: space-between;
  }

  & div.box {
    box-sizing: border-box;
    background-color: rgb(248, 249, 250);
    width: 100%;
    height: 4rem;
    margin: 0.5rem 0;
    padding: 0 1rem;
    cursor: pointer;

    & * {
      margin: 0;
    }

    @media ${(props) => props.theme.desktop} {
      width: 49%;
    }
  }
`;

const Next = styled.div`
  ${(props) => props.theme.flex_row};
  justify-content: flex-end;
  & div.info {
    text-align: right;
    margin-right: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover .icon {
    animation: ${moveRight} 0.3s linear alternate;
  }
`;

const Prev = styled.div`
  ${(props) => props.theme.flex_row};
  justify-content: flex-start;
  & div.info {
    margin-left: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover .icon {
    animation: ${moveLeft} 0.3s linear alternate;
  }
`;

const I = styled.span`
  width: 32px;
  height: 32px;
  ${(props) => props.theme.flex_row}
  justify-content:center;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.velog_green};

  & * {
    color: ${(props) => props.theme.velog_green};
    font-size: 0.9rem;
  }
`;

export default PostFooter;
