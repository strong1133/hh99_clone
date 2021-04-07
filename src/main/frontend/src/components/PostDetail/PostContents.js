import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
//import { ReactComponent as Heart } from '../../static/Heart_Black.svg';
import { ReactComponent as Heart } from '../../static/heart.svg';
import { ReactComponent as Share } from '../../static/share.svg';
import PostProjectBox from './PostProjectBox';
import { Wrapper } from '../../elements';

const PostContents = (props) => {
  const contents = useSelector((state) => state.post.detailPost.contents);
  const navRef = useRef(null);
  useEffect(() => {
    window.onscroll = function () {
      console.log(navRef.current.getBoundingClientRect());
      if (navRef.current.getBoundingClientRect().top < 0) {
        navRef.current.style.position = 'relative';
        navRef.current.style.top = window.scrollY + 'px';
        navRef.current.style.left = navRef.current.getBoundingClientRect().left;
      }

      if (window.scrollY < 250) {
        navRef.current.style.position = '';
      }
    };
    return () => {};
  }, []);


  const handleScroll = (e) => {
    if (navRef.current) {
      console.log(navRef.current.getBoundingClientRect());
      if (navRef.current.getBoundingClientRect().top < 0) {
        navRef.current.style.position = 'relative';
        navRef.current.style.top = window.scrollY + 'px';
        navRef.current.style.left = navRef.current.getBoundingClientRect().left;
      }

      if (window.scrollY < 250) {
        navRef.current.style.position = '';
      }
    }
  };
  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <Container>
      <Navbar ref={navRef}>
        <div className="inner">
          <Icon>
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
      <div>목차</div>
    </Container>
  );
};

PostContents.defaultProps = {};

const Container = styled.div`
  ${(props) => props.theme.border_box};
  ${(props) => props.theme.flex_row};
  align-items: flex-start;
  padding: 0 1rem;
`;

const Navbar = styled.div`
  width: 4rem;
  margin: 2rem 0;
  background: rgb(248, 249, 250);
  border: 1px solid rgb(241, 243, 245);
  border-radius: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  ${(props) => props.theme.border_box};

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
const Contents = styled.div`
  ${(props) => props.theme.default_width}
`;

const Main = styled.div`
  ${(props) => props.theme.default_width};
  margin: 0 2rem;
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
  //background: rgb(32, 201, 151);
  color: white;

  & svg {
    width: 1.7rem;
    fill: white;
  }
`;
export default PostContents;
