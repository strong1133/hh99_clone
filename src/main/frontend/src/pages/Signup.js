import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { Grid, Text} from "../elements";

import { emailCheck } from "../shared/common";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [pwd, setPwd] = React.useState("");


  const signup = () => {
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (email === "") {
      window.alert("잘못된 이메일 형식입니다.");
      return;
    }
  };

  console.log(email);
  console.log(username);
  console.log(pwd);



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
        <Text bold>회원가입</Text>
        <Text>이메일로 회원가입</Text>

        <LoginInput
          value = {email}
          placeholder="이메일을 입력하세요"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <LoginInput
          value = {username}
          placeholder="닉네임을 입력하세요"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <LoginInput
          value = {pwd}
          placeholder="비밀번호를 입력하세요"
          type = "password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <LoginButton onClick={()=>{signup();}}>회원가입</LoginButton>

        <Text bold>소셜 계정으로 회원가입</Text>
        <SNSLoginButton>카카오계정으로 회원가입</SNSLoginButton>

        <Text>계정이 이미 있으신가요?</Text>
        <TextButton
          onClick={() => {
            history.replace("/login");
          }}
        >
          로그인
        </TextButton>
      </PopupContainer>
    </React.Fragment>
  );
};

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
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.main_black};
  background-color: yellow;
`;

const TextButton = styled.text`
  color: ${(props) => props.theme.velog_green};
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Signup;
