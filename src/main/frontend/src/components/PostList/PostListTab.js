// PostListTab의 구조
// 탭에 따라서 리스트 정렬 바꾸기
import styled from "styled-components";
import { Grid } from "../../elements";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Trend from "../../static/Trend.svg";
import Time from "../../static/Time.svg";
import Tab from "./Tab";
import Card from "./Card";


const PostListTab = () => {
  const location = useLocation();

  const [tabNum, setTabNum] = useState(location.pathname === "mode");

  const [isTrendingMode, setIsTrendingMode] = React.useState(true);

  //  무한 루프에 빠지지 않도록
  useEffect(() => {
    return () => {};
  }, []);


  return (
    <TabContainer>
      <Tab
        {...{ tabNum, setTabNum }}
        tabItems={[
          
              <Grid is_flex padding="16px">
                <img width="20px" src={Trend} />
                <text
                  onClick={() => {setIsTrendingMode(true);}}
                >
                  트렌딩
                </text>
              </Grid>
            ,
              <Grid is_flex padding="25px">
                <img width="20px" src={Time} />
                <text
                  onClick={() => {setIsTrendingMode(false);}}
                >
                  최신
                </text>
              </Grid>
        ]}
      />

      <ListContainer>
        <Card trendingMode={isTrendingMode} />
      </ListContainer>
    </TabContainer>
  );
};


const TabContainer = styled.div`
  display: flex;
  width: 93%;
  margin: auto;
  flex-direction: column;
  height: 100%;
  margin-top: 2rem;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default PostListTab;
