import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";

import Card from "../components/Card";
import Trend from "../static/Trend.svg";
import Time from "../static/Time.svg";

const PostList = (props) => {
  return (
    <React.Fragment>
      <Box height="45px"></Box>
        <FilterBox>
          <Box width="90px" margin="0px 0px 0px 20px">
            <img width="20px" src={Trend} />
            <Text bold size="12pt" margin="12px">
              트렌딩
            </Text>
          </Box>
          <Box width="90px" margin="0px 0px 0px 20px">
            <img width="20px" src={Time} />
            <Text bold size="12pt" margin="12px">
              최신
            </Text>
          </Box>
        </FilterBox>
      

      <Grid>
        <ListContainer>
          <Card />
        </ListContainer>
      </Grid>
    </React.Fragment>
  );
};

const FilterBox = styled.div`
  width: 90vw;
  height: 30px;
  color: #343a40;
  margin: 0px auto 20px;
  display: flex;
`;

const Box = styled.div`
  top: 200px;
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  align-items: center;
`;

const ListContainer = styled.div`
 @media (max-width: 1024px) {
    width: calc(80% - 2rem);
  }

  @media (max-width: 768px) {
    width: 90vw;
  }

  width:90vw; 
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export default PostList;
