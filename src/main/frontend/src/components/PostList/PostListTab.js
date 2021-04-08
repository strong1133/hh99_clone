import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { history } from "../../redux/configureStore";
import { useLocation } from "react-router-dom";

import Trend from "../../static/Trend.svg";
import Time from "../../static/Time.svg";
import Tab from "./Tab";
import Card from "./Card";

const PostListTab = () => {
  const location = useLocation();
  const [tabNum, setTabNum] = useState(location.pathname === "/recent" ? 1 : 0);

  const [isTrendingMode, setIsTrendingMode] = React.useState(true);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <TabContainer>
      <Tab
        {...{ tabNum, setTabNum }}
        tabItems={[
          {
            component: (
              <>
                <img width="20px" src={Trend} />
                <TabText
                  onClick={() => {
                    setIsTrendingMode(true);
                  }}
                >
                  트렌딩
                </TabText>
              </>
            ),
          },
          {
            component: (
              <>
                <img width="20px" src={Time} />
                <TabText
                  onClick={() => {
                    setIsTrendingMode(false);
                  }}
                >
                  최신
                </TabText>
              </>
            ),
          },
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

const TabText = styled.div`
  margin-left: 0.5rem;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default PostListTab;
