import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";

import Card from "../components/Card";
import Trend from "../static/Trend.svg";
import Time from "../static/Time.svg";

const PostList = (props) => {
  return (
    <React.Fragment>
      <FilterBox>
        <Box>
          <img width="20px" src={Trend} />
          <Text bold margin="10px">트렌딩</Text>
        </Box>
        <Box>
          <img width="20px" src={Time} />
          <Text bold margin="10px">최신</Text>
  
        </Box>
        </FilterBox>

        <Grid>
          <ListingBox>
            <Card />
          </ListingBox>
        </Grid>
    </React.Fragment>
  );
};

const FilterBox = styled.div`
  top: 64px;
  width:70vw;
  height: 48px;
  color: #343a40;
  margin: 0px auto 20px;
  display: flex;
`;

const Box = styled.div`
  display: flex;
  width:90px;
  height: 48px;
  align-items: center;
  margin:16px;
  
`;

const ListingBox = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  &:hover {
  }
`;

export default PostList;