import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { Text } from "../elements";

import { emailCheck } from "../shared/common";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [userName, setUsername] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [pw, setPw] = React.useState("");

  const { onClickModal } = props;

  const signup = () => {
    if (!emailCheck(userName)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (userName === "") {
      window.alert("잘못된 이메일 형식입니다.");
      return;
    }
    dispatch(userActions.signupAPI(userName, nickname, pw));
    onClickModal()
  };

  return (
    <React.Fragment>
      <Container>
      <Box1>
        <CharImg
          width="168px"
          src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
        />
        <WelcText>환영합니다!</WelcText>
      </Box1>

      <Box2>
        <Text bold margin="5px" size="16pt">
          회원가입
        </Text>
        <Text bold margin="25px 5px 5px 5px" color="#868e96" size="12pt">
          이메일로 회원가입
        </Text>

        <LoginInput
          value={userName}
          placeholder="이메일을 입력하세요"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <LoginInput
          value={nickname}
          placeholder="닉네임을 입력하세요"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <LoginInput
          value={pw}
          placeholder="비밀번호를 입력하세요"
          type="password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <LoginButton
          onClick={() => {
            signup();
            
          }}
        >
          회원가입
        </LoginButton>

          <Text bold margin="10px 10px 5px 142px" color="#868e96" size="12pt">
            계정이 이미 있으신가요? {"  "}
            <TextButton size="12pt"  onClick={onClickModal}>
              로그인
            </TextButton>
          </Text>
        </Box2>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Box1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 225px;
  height: 560px;
  background-color: #f1f3f5;
  position: absolute;
  align-items: center;
  z-index: 0;
`;
const Box2 = styled.div`
  margin-top: 70px;
  margin-left: 250px;
  z-index: 10;
`;

const CharImg = styled.img`
  position: absolute;
  margin-left: 30px;
  margin-top: 180px;
`;

const WelcText = styled.text`
  position: absolute;
  margin-top: 300px;
  margin-left: 50px;
  font-size: 28px;
  font-weight: bold;
  color: #495057;
`;

const LoginInput = styled.input`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: 16px;
  margin: 5px;
  box-sizing: border-box;
  border: 1px solid #dcdddd;
  font-size: 16px;
  color: ${(props) => props.theme.main_black};
  background-color: ${(props) => props.theme.main_white};
  &:hover {
  }
`;

const LoginButton = styled.button`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: auto;
  margin: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.main_white};
  background-color: ${(props) => props.theme.velog_green};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.velog_green_h};
  }
`;

const TextButton = styled.span`
  color: ${(props) => props.theme.velog_green};
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Signup;
