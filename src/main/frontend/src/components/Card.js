import React from "react";
import styled from "styled-components";

import { Grid, Text, Image, Button } from "../elements";

const Card = (props) => {
  return (
    <React.Fragment>
      <Box>
        <Box_1 src="https://media.vlpt.us/images/dongyi/post/afdf1622-db3e-4ec2-adce-ab51f541feff/%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%20-%20%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A5%E1%84%87%E1%85%B2.jpg?w=640" />
        <Box_2>
          <Grid padding="12px" left>
            <Text bold size="16px">
              여기는 제목
            </Text>
            <Text size="14px">여기는 내용</Text>
            <Text size="6px" color="grey">2021년 4월 3일 0개의 댓글</Text>
          </Grid>
        </Box_2>
        <Box_3>
          <Grid is_flex padding="12px">
            <Grid is_flex width="auto">
              <Image
                shape="circle"
                src="https://media.vlpt.us/images/dongyi/profile/1d42f7e3-42c3-4b65-8c64-e6169c437565/cm-fb-profile.png?w=120"
              />
              <Text size="8pt">by</Text>{" "}
              <Text bold size="8pt">
                {" "}
                dongyi
              </Text>
            </Grid>
            <Text size="8pt">하트 201 </Text>
          </Grid>
        </Box_3>
      </Box>
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

const Box_1 = styled.img`
  width: 320px;
  height: 167px;
  object-fit: cover;
  background-image: url("${(props) => props.src}");
`;

const Box_2 = styled.div`
  width: 320px;
  height: 165px;
  border-radius: 5px;
  box-shadow: 0 4px 6px #eee;
  background-color: ${props=>props.theme.main_white};
  background-size: cover;
`;

const Box_3 = styled.div`
  width: 320px;
  height: 45px;
  border-radius: 5px;
  box-shadow: 0 4px 6px #eee;
  background-color: ${props=>props.theme.main_white};
  background-size: cover;
  bottom: 0;
`;

export default Card;
