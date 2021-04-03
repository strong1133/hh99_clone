import React from "react";
import styled from "styled-components";

import Card from "../components/Card";

const PostList = (props) => {
  return (
    <React.Fragment>
      <TNBox>
        <Container>
          <Card />
        </Container>
      </TNBox>
    </React.Fragment>
  );
};
const TNBox= styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
`;
const Container = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  border-radius: 5px 5px 0px 0px;
  position: absolute;
`;

export default PostList;
