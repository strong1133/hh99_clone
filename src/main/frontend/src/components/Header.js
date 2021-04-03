import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements";

const Header = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid padding="12px" is_flex>
          <Grid is_flex>
            <Text bold size="21pt">
              Velog
            </Text>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  border-radius: 5px 5px 0px 0px;
  position: fixed;
`;

export default Header;
