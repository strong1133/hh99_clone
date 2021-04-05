// import React from "react";
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { history } from '../redux/configureStore';

import { Grid, Text, Image, Button } from '../elements';

import Heart_Black from '../static/Heart_Black.svg';

const Card = (props) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:8080/api/articles');
    setUsers(response.data);
    console.log(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
      {users.map((user) => (
        <CardContainer key={user.id}>
          <Box1
            src={user.image}
            onClick={() => {
              history.push(`/article/${user.id}`);
            }}
          />
          <Box2>
            <Grid padding="12px" left>
              <Text bold size="16px">
                {user.title}
              </Text>
              <Text size="14px">{user.contents}</Text>
              <Text size="6px" color="grey">
                {user.createAt}
              </Text>
            </Grid>
          </Box2>
          <Box3>
            <Grid is_flex padding="12px">
              <Grid is_flex width="auto">
                <Image
                  shape="circle"
                  src="https://media.vlpt.us/images/dongyi/profile/1d42f7e3-42c3-4b65-8c64-e6169c437565/cm-fb-profile.png?w=120"
                />
                <Text size="8pt">by</Text>
                <Text bold size="8pt" margin="0 0 0 5px">
                  {user.author}
                </Text>
              </Grid>
              <Grid is_flex width="auto">
                <img width="12px" src={Heart_Black} />
                <Text blod size="8pt" margin="0px 5px 0px 5px">
                  {user.liked}
                </Text>
              </Grid>
            </Grid>
          </Box3>
        </CardContainer>
      ))}
    </React.Fragment>
  );
};

const CardContainer = styled.div`
  width: 320px;
  max-width: 335px;
  min-height: 0;
  overflow: hidden;
  padding-bottom: 5%;
  margin: 0.8rem;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px 0px;
  background-color: ${(props) => props.theme.main_white};
  background-size: cover;
  &:hover {
    transform: translateY(-12px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px 0px;
  }
`;

const Box1 = styled.img`
  width: 100%;
  height: 100px;
  min-height: 167px;
  max-height: 180px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  background-image: url('${(props) => props.src}');
`;

const Box2 = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  padding: 10px;
  margin: auto;
  background-color: ${(props) => props.theme.main_white};
  background-size: cover;
`;

const Box3 = styled.div`
  width: 100%;
  min-height: 45px;
  max-height: 50px;
  border-radius: 0px 0px 5px 5px;
  background-color: ${(props) => props.theme.main_white};
  background-size: cover;
  position: absolute;
  bottom: 0;
`;

export default Card;
