import React, { FC } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";



const Tab: FC<Tab> = ({
  tabNum,
  setTabNum,
  tabItems,
  tabWidth,
}) => {
  const tabButtonHandler = (idx= 2) => {
    const newTabItem = tabItems[idx];
    //console.log(idx);
    //console.log(newTabItem);
    setTabNum(idx);
    window.history.replaceState(null, newTabItem.title || "", newTabItem.url);
  };

  return (
    <nav>
      <Helmet>
        <title>{tabItems[tabNum].title}</title>
      </Helmet>
      <TabContainer tabCount={tabItems.length} tabWidth={tabWidth || 7}>
        {tabItems.map((tab, idx) => (
          <TabButton
            key={idx}
            tabNum={tabNum}
            tabWidth={tabWidth || 7}
            onClick={() => tabButtonHandler(idx)}
          >
            {tabItems[idx].component}
          </TabButton>
        ))}
        <FocusBar tabNum={tabNum} tabCount={tabItems.length} />
      </TabContainer>
    </nav>
  );
};


const TabContainer = styled.div`
  width: ${(props) => props.tabCount * props.tabWidth + `rem`};
  min-height: min-content;
  display: flex;
  flex-wrap: wrap;
  margin-left:30px;
  margin-bottom:10px;
`;

const TabButton = styled.div`
  width: ${(props) => props.tabWidth + `rem`};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  height: 3rem;
  text-decoration: none;
  &:nth-child(${(props) => props.tabNum + 1}) {
    color: rgb(52, 58, 64);
    font-weight: bold;
  }
  color: rgb(134, 142, 150);
  cursor: pointer;
`;


const FocusBar = styled.div`
  width: ${(props) => (props.tabCount === 0 ? 0 : 100 / props.tabCount + `%`)};
  height: 2px;
  bottom: 0px;
  background: rgb(52, 58, 64);
  transition: transform 0.35s cubic-bezier(0, 0, 0.1, 2) 0s;
  position: relative;
  transform: ${(props) => `translateX(${props.tabNum * 100}%);`};
`;

export default React.memo(Tab);
