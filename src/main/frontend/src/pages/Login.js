import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";
import { history } from "../redux/configureStore";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { emailCheck } from "../shared/common";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";



const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeEmail = (e) => {setEmail(e.target.value);};
  const changePwd = (e) => {setPwd(e.target.value);};

  const login = () => {
    dispatch(userActions.loginAction({user_name:'perl'}));

    // if (email === "") {
    //   window.alert("잘못된 이메일 형식입니다.");
    //   return;
    // }
    // if (!emailCheck(email)) {
    //   window.alert("잘못된 이메일 형식입니다.");
    //   return;
    // }
    
  };
  return (
    <React.Fragment>
      <PopupContainer>
        <img
          width="12px"
          src="https://image.flaticon.com/icons/png/512/458/458595.png"
          onClick={() => {
            history.replace("/");
          }}
        />
        <Text bold>로그인</Text>
        <Text>이메일로 로그인</Text>

        <LoginInput
          value={email}
          onChange={changeEmail}
          placeholder="이메일을 입력하세요"
        />
        <LoginInput
          value={pwd}
          onChange={changePwd}
          placeholder="비밀번호를 입력하세요"
          type="password"
        />
        <LoginButton
          onClick={() => {
            console.log("로그인했어!");
            login();
          }}
        >
          로그인
        </LoginButton>

        <Text bold>소셜 계정으로 로그인</Text>
        <SNSLoginButton>카카오계정으로 로그인</SNSLoginButton>

        <Text>아직 회원이 아니신가요? </Text>
        <TextButton
          onClick={() => {
            history.replace("/signup");
          }}
        >
          회원가입
        </TextButton>
      </PopupContainer>
    </React.Fragment>
  );
};

// const Dim = styled.div`
//   position: fixed;
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   background: #00000055;
// `;

const PopupContainer = styled.div`
  width: 500px;
  height: auto;
  border-radius: 0px;
  margin: auto;
  padding: 40px;
  background-color: #ffffff;
`;

const LoginInput = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 0px;
  padding: 16px;
  margin: 8px;
  box-sizing: border-box;
  border: 1px solid #eee;
  font-size: 16px;
  font-weight: lighter;
  color: ${(props) => props.theme.main_black};
  background-color: ${(props) => props.theme.main_white};
  &:hover {
    background-color: opacity=0.8;
  }
`;

const LoginButton = styled.button`
  width: 350px;
  height: 40px;
  border-radius: 0px;
  padding: auto;
  margin: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.main_white};
  background-color: ${(props) => props.theme.velog_green};
`;

const SNSLoginButton = styled.button`
  width: 350px;
  height: 40px;
  border-radius: 0px;
  padding: auto;
  margin: 8px;
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.main_black};
  background-color: #ffd43b;
`;

const TextButton = styled.text`
  color: ${(props) => props.theme.velog_green};
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Login;
