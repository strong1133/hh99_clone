import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import CustomAxious from "../CustomAxios";
import "./App.css";
import styled from "styled-components";

import { Grid } from "../elements";
import Header from "../components/Header";

import { Route, BrowserRouter } from "react-router-dom";
// import { ConnectedRouter } from "connected-react-router";

import { PostList, PostDetail } from "../pages";

function App() {
  return (
    <div className="App">
        <CustomAxious></CustomAxious>
          <AppWrap>
          <Grid width="1376px" margin="auto">
            <BrowserRouter>
              <Route path="/" exact component={PostList} />
              <Route path="/detail" exact component={PostDetail} />
            </BrowserRouter>
            </Grid>
          </AppWrap>
    </div>
  );
}

const AppWrap = styled.div`
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${props=>props.theme.main_bg_color};
`;

export default App;