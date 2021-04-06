import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Image } from "../elements";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import search from "../static/search.svg";
import {getCookie, deleteCookie} from "../shared/Cookie";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  if(is_login){
  return (
    <React.Fragment>
      <HeaderContainer>
        <Grid>
          <Grid is_flex padding="16px">
            <HeaderText bold size="21pt">
              velog
            </HeaderText>

        <Grid is_flex width="auto" margin="16px">
        <LoginButton onClick={()=>{dispatch(userActions.logOut({}));}}>로그아웃</LoginButton>
          <img width="18px" src={search} />
          <LoginButton>새 글 작성</LoginButton>
          <ProfileImg 
            shape="circle"
            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559055.jpg"
          />
        </Grid>

          </Grid>
        </Grid>
      </HeaderContainer>
    </React.Fragment>
  );
  }

   //  로그인 전

  return (
    <React.Fragment>
      <HeaderContainer>
        <Grid>
          <Grid is_flex padding="16px">
            <HeaderText bold size="21pt">
              velog
            </HeaderText>

            <Grid is_flex width="auto" margin="16px">
              <img width="18px" src={search} />
              <LoginButton
                onClick={() => {
                  history.push("/login");
                }}
              >로그인
              </LoginButton>
            </Grid>

            {/* 로그인 후
        <Grid is_flex width="auto" margin="16px">
          <img width="18px" src={search} />
          <LoginButton>새 글 작성</LoginButton>
          <ProfileImg 
            shape="circle"
            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559055.jpg"
          />
        </Grid> */}
          </Grid>
        </Grid>
      </HeaderContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
  @media (max-width: 768px) {
    width: 70vw;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 1024px;
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

  background-color: ${(props) => props.theme.main_bg_color};
`;

const HeaderText = styled.text`
  font-family: "Fira Mono", monospace;
  font-size: 18pt;
`;

const WriteButton = styled.button`
  min-width: "150px";
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
  min-width: "150px";
  height: 33px;
  border-radius: 33px;
  margin: 0px 10px 0px 15px;
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
    opacity:0.3;
  }
`;

const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 30px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Header;