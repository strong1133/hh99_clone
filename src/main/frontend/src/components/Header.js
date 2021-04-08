import React from 'react';
import styled from 'styled-components';
import { Grid } from '../elements';

import { history } from '../redux/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import search from '../static/search.svg';

import Login from './Login';
import Signup from './Signup';

import Modal from 'react-modal';

import v_logo from '../static/v_logo.svg';

const Header = (props) => {
  const { author, toWrite } = props;

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.is_login);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [isLoginMode, setIsLoginMode] = React.useState(true);

  const onClickModal = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <React.Fragment>
      <HeaderContainer>
        <Grid is_flex padding="16px">
          {author ? (
            <Grid>
              <img
                width="25px"
                margin="16px"
                src={v_logo}
                onClick={() => {
                  history.push('/');
                }}
              />
              <TextLogo size="21pt">{author}.log</TextLogo>
            </Grid>
          ) : (
            <TextLogo
              size="21pt"
              onClick={() => {
                history.push('/');
              }}
            >
              velog
            </TextLogo>
          )}

          {isLogin ? (
            <Grid is_flex width="auto" margin="16px">
              <LoginButton
                onClick={() => {
                  dispatch(userActions.logoutCheck({}));
                }}
              >
                로그아웃
              </LoginButton>
              <img width="18px" src={search} />
              <LoginButton onClick={toWrite}>새 글 작성</LoginButton>
              <ProfileImg
                shape="circle"
                src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559055.jpg"
              />
            </Grid>
          ) : (
            <Grid is_flex width="auto" margin="16px">
              <img width="18px" src={search} />
              <LoginButton onClick={() => setModalIsOpen(true)}>
                로그인
              </LoginButton>
              <Modal isOpen={modalIsOpen} close={closeModal} style={modalStyle}>
                {isLoginMode ? (
                  <Login onClickModal={onClickModal} />
                ) : (
                  <Signup onClickModal={onClickModal} />
                )}
                <CloseButton
                  src="https://image.flaticon.com/icons/png/512/458/458595.png"
                  onClick={closeModal}
                />
              </Modal>
            </Grid>
          )}
        </Grid>
      </HeaderContainer>
    </React.Fragment>
  );
};

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(247, 247, 247, 0.8)',
    transition: 'opacity 2000ms ease-in-out'
  },
  content: {
    width: '650px',
    height: '510px',
    margin: 'auto',
    border: 'none',
    boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
  }
};

const CloseButton = styled.img`
  width: 11px;
  position: absolute;
  top: 30px;
  right: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  @media (max-width: 768px) {
    width: 90vw;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 768px;
  }
  /* @media (max-width: 768px) {
    width: 95vw;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 95w;
  } */
  width: 100vw;
  max-width: 1444px;
  margin: auto;
  height: 48px;
  padding: 16px;
  display: flex;

  /* background-color: ${(props) => props.theme.main_bg_color}; */
`;

const TextLogo = styled.text`
  font-family: 'Fira Mono', monospace;
  font-size: 18pt;
  position: relative;
  top: -5px;
  &:hover {
    cursor: pointer;
  }
`;

const WriteButton = styled.button`
  min-width: '150px';
  height: 33px;
  border-radius: 33px;
  margin: 0px 10px 0px 15px;
  padding: 1px 16px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.main_black};
  background-color: #ffffff;
  border: 1.5px solid;
  border-color: ${(props) => props.theme.main_black};
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.main_black};
    color: ${(props) => props.theme.main_white};
  }
`;

const LoginButton = styled.button`
  min-width: 90px;
  height: 33px;
  border-radius: 33px;
  margin: 0px 0px 0px 15px;
  padding: 1px 16px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.main_white};
  background-color: ${(props) => props.theme.main_black};
  border: 1.5px solid;
  border-color: ${(props) => props.theme.main_black};
  outline: none;
  &:hover {
    opacity: 0.3;
  }
`;

const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 30px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

export default Header;
