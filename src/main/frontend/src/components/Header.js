import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import search from "../static/search.svg";
import v_logo from "../static/v_logo.svg";

import Login from "./Login";
import Signup from "./Signup";
import Modal from "react-modal";

const Header = (props) => {
  const dispatch = useDispatch();

  // PostDetail 페이지 Post 작가 이름 불러오기
  const { author } = props;
  // 로그인 유무
  const isLogin = useSelector((state) => state.user.is_login);

  const [isLoginMode, setIsLoginMode] = React.useState(true);

  // 로그인/회원가입 모달창
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClickModal = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <React.Fragment>
     
      <HeaderContainer>
        <Grid is_flex padding="16px">
          
           {/* 메인페이지 일 때 : 상세 페이지 일 때 => 로고 부분 변함*/}
          {author ? (
            <Grid>
              <img
                width="25px"
                margin="16px"
                src={v_logo}
                onClick={() => {
                  history.push("/");
                }}
              />
              <TextLogo size="21pt">{author}.log</TextLogo>
            </Grid>
          ) : (
            <TextLogo
              size="21pt"
              onClick={() => {
                history.push("/");
              }}
            >
              velog
            </TextLogo>
          )}

          {/* 로그인 전 : 로그인 후 */}
          {isLogin ? (
            <Grid is_flex width="auto" margin="16px">
              <SearchContainer to="/search">
                <img width="18px" src={search} />
              </SearchContainer>
              <WriteButton onClick={() => history.push("/write")}>
                새 글 작성
              </WriteButton>
              <WriteButton
                onClick={() => {
                  dispatch(userActions.logoutCheck({}));
                }}
              >
                로그아웃
              </WriteButton>
              <ProfileImg
                shape="circle"
                src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559055.jpg"
              />
            </Grid>
          ) : (
            <Grid is_flex width="auto" margin="16px">
              <SearchContainer to="/search">
                <img width="18px" src={search} />
              </SearchContainer>

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
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(247, 247, 247, 0.8)",
    transition: "opacity 2000ms ease-in-out",
  },
  content: {
    width: "650px",
    height: "510px",
    margin: "auto",
    border: "none",
    boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
  },
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
  ${(prop) => prop.theme.responsiveContainer};
  width: 100%;
  max-width: 1444px;
  margin: auto;
  height: 48px;
  padding: 16px;
  display: flex;
  box-sizing: border-box;
`;

const TextLogo = styled.text`
  font-family: "Fira Mono", monospace;
  font-size: 20pt;
  position: relative;
  top: -5px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const WriteButton = styled.button`
  width: 90px;
  height: 33px;
  border-radius: 33px;
  margin: 0px 12px 0px 0px;
  padding: 7px;
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
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  min-width: 80px;
  height: 33px;
  border-radius: 33px;
  margin: 5px;
  padding: 7px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.main_white};
  background-color: ${(props) => props.theme.main_black};
  border: 1.5px solid;
  border-color: ${(props) => props.theme.main_black};
  outline: none;
  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: inherit;
  width: 37px;
  height: 37px;
  border-radius: 10rem;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 30px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin-right: 15px;
`;

export default Header;
