import React from 'react';
import styled from 'styled-components';

import { Grid, Text, Button } from '../elements';



const Login = (props) => {

    return(
        <Grid>
            <Text>x</Text>
            <Text bold>로그인</Text>
            <Text>이메일로 로그인</Text>
            <Grid>
            <LoginInput placeholder="이메일을 입력하세요"/>
            <LoginButton>로그인</LoginButton>
            </Grid>
            <Text bold>소셜 계정으로 로그인</Text>
            <Button>카카오계정으로 로그인</Button>

            <Grid>
            <Text color="${props=>props.theme.main_green}">아직 회원이 아니신가요?</Text>
            <Button>회원가입</Button>
            </Grid>
        </Grid>

    );
}

const LoginInput = styled.input`
  min-width: "200px";
  height: 40px;
  border-radius: 0px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #eee;
  font-size: 16px;
  font-weight: lighter;
  color: #eee;
  background-color: ${props=>props.theme.main_white};
`;

const LoginButton = styled.button`
  min-width: "30px";
  height: 40px;
  border-radius: 0px;
  padding: 16px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  color: ${props=>props.theme.main_white};
  background-color: ${props=>props.theme.main_green};
  &:hover {
    background-color: opacity = 0.5
  }
`;

export default Login;