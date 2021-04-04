import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Image } from "../elements";
import search from "../static/search.svg";

const Header = (props) => {

  return (

    <React.Fragment>
      <HeaderContainer>
      <Grid>
      <Grid is_flex margin="16px">
          <HeaderText bold size="21pt">
            Velog
          </HeaderText>
        
        <Grid is_flex width="auto" margin="16px">
          <img width="18px" src={search} />
          <HeaderButton>새 글 작성</HeaderButton>
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
};

const HeaderContainer = styled.div`
  width:70vw;
  height: 64px;
  margin: auto;
  display: flex;
  /* @media (max-width: 1376px){
    width: 1024px;
  }@media (max-width: 1024px){
    width: 768px;
  } @media (max-width: 768px){
    width: 100%;
  } */
`;

const HeaderText = styled.text`
  font-family: "Fira Mono", monospace;
  font-size: 18pt;
`;



const HeaderButton = styled.button`
  min-width: "150px";
  height: 35px;
  border-radius: 35px;
  margin: 0px 10px 0px 15px;
  padding: 1px 16px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  color: ${props=>props.theme.main_black};
  background-color:#ffffff;
  border: 1.5px solid;
  border-color: ${props=>props.theme.main_black};
  &:hover {
    background-color: ${props=>props.theme.main_black, 0.9};
    color: ${props=>props.theme.main_white};
  }
`;


const ProfileImg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 40px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Header;