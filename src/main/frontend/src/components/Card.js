// import React from "react";
import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import axios from "axios";

import { Grid, Text, Image, Button } from "../elements";

const Card = (props) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {

      const response = await axios.get(
          'http://localhost:8080/api/articles'
      );
      setUsers(response.data);
      console.log(response)
  };

  useEffect(() => {
      fetchUsers();
  }, []);

  return (
    <React.Fragment>
      {
        users.map(user =>(
        <Box key={user.id}>
          <Box1 src={user.image} />
          <Box2>
            <Grid padding="12px" left>
              <Text bold size="16px">
              {user.title}
              </Text>
              <Text size="14px">{user.contents}</Text>
              <Text size="6px" color="grey">{user.createAt}</Text>
            </Grid>
          </Box2>
          <Box3>
            <Grid is_flex padding="12px">
              <Grid is_flex width="auto">
                <Image
                  shape="circle"
                  src="https://media.vlpt.us/images/dongyi/profile/1d42f7e3-42c3-4b65-8c64-e6169c437565/cm-fb-profile.png?w=120"
                />
                <Text size="8pt">by</Text>{" "}
                <Text bold size="8pt" margin="0 0 0 5px">
                  {user.author}
                </Text>
              </Grid>
              <Text size="8pt">하트 201 </Text>
            </Grid>
          </Box3>
        </Box>
        ))
      }
    </React.Fragment>
  );
};

const Box = styled.div`
  width: 320px;
  height: 377px;
  margin: 16px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0 4px 6px #eee;
  background-color: ${props=>props.theme.main_white};
  background-size: cover;
`;

const Box1 = styled.img`
  width: 320px;
  height: 167px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  background-image: url("${(props) => props.src}");
`;

const Box2 = styled.div`
  width: 320px;
  height: 165px;
  border-radius: 5px;
  box-shadow: 0 4px 6px #eee;
  background-color: ${props=>props.theme.main_white};
  background-size: cover;
`;

const Box3 = styled.div`
  width: 320px;
  height: 45px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0 4px 6px #eee;
  background-color: ${props=>props.theme.main_white};
  background-size: cover;
  bottom: 0;
`;

export default Card;
