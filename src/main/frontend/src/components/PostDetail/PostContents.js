import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Heart } from '../../static/heart.svg';
import { ReactComponent as Share } from '../../static/share.svg';
import PostProjectBox from './PostProjectBox';
import { actionCreators as postActions } from '../../redux/modules/post';

const PostContents = (props) => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.post.detailPost.contentsHtml);
  const postId = useSelector((state) => state.post.detailPost.id);
  const navRef = useRef(null);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (!navRef.current) return;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollTop = winScroll / (scrollHeight - clientHeight);

    if (scrollTop * 100 > 60) {
      navRef.current.style.top = window.scrollY + 'px';
    }
  };

  const onClickHeart = () => {
    if (isLike) {
      dispatch(postActions.likePost(postId, 'userId'));
    } else {
      dispatch(postActions.dislikePost(postId, 'userId'));
    }

    setIsLike(!isLike);
  };

  return (
    <React.Fragment>
      <Navbar ref={navRef}>
        <div className="inner">
          <Icon is_like={isLike} onClick={onClickHeart}>
            <Heart />
          </Icon>
          <span className="number">123</span>
          <Icon>
            <Share />
          </Icon>
        </div>
      </Navbar>
      <Main>
        <PostProjectBox />
        <Contents dangerouslySetInnerHTML={{ __html: contents }}></Contents>
      </Main>
      <Index></Index>
    </React.Fragment>
  );
};

PostContents.defaultProps = {};

const Container = styled.div`
  ${(props) => props.theme.border_box};
  ${(props) => props.theme.flex_row};
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  border: 1px solid black;

  @media ${(props) => props.theme.desktop} {
    justify-content: space-between;
    width: 80vw;
  }
`;

const Navbar = styled.div`
  position: absolute;

  top: 58%;
  left: 15%;
  width: 4rem;
  margin: 2rem 0;
  background: rgb(248, 249, 250);
  border: 1px solid rgb(241, 243, 245);
  border-radius: 2rem;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  ${(props) => props.theme.border_box};
  display: none;

  @media ${(props) => props.theme.desktop} {
    display: block;
  }

  & div.inner {
    width: 64px;
    height: 150px;
    background: rgb(248, 249, 250);
    border: 1px solid rgb(241, 243, 245);
    border-radius: 2rem;
    padding: 8px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    ${(props) => props.theme.border_box};

    & span.number {
      margin: 2px 0 10px 0;
      font-size: 0.8rem;
      font-weight: bold;
      color: ${(props) => props.theme.black};
    }
  }
`;

const Index = styled.div`
  display: none;
  margin: 2rem 0;

  @media ${(props) => props.theme.desktop} {
    display: block;
  }
`;
const Contents = styled.div`
  ${(props) => props.theme.default_width};
  margin-top: 4rem;
`;

const Main = styled.div`
  ${(props) => props.theme.default_width};
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  //border: 1px solid rgb(32, 201, 151);
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 1.5rem;
  cursor: pointer;
  z-index: 5;
  background: ${(props) =>
    props.is_like ? 'pink' : 'white'}; //rgb(32, 201, 151);
  color: white;
  &:hover {
    border-color: black;
  }

  & svg {
    width: 1.7rem;
  }
`;
export default PostContents;
