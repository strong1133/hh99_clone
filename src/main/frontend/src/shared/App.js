import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import CustomAxious from '../CustomAxios';
import './App.css';
import styled from 'styled-components';

import { Grid } from '../elements';

<<<<<<< HEAD
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { PostList, PostDetail, Login, Signup } from "../pages";
import Header from "../components/Header";
import { history } from "../redux/configureStore";
=======
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PostList, PostDetail } from '../pages';
import Header from '../components/Header';
import { history } from '../redux/configureStore';
>>>>>>> 7c176832f6b0752f2cad37d7010d8afa3891c949

function App() {
  return (
    <React.Fragment>
      <Background>
<<<<<<< HEAD
          <Header></Header>
          <ConnectedRouter history={history}>
            <Route path="/" exact component={PostList} />
            <Route path="/detail" exact component={PostDetail} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </ConnectedRouter>
=======
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/article/:id" exact component={PostDetail} />
        </ConnectedRouter>
>>>>>>> 7c176832f6b0752f2cad37d7010d8afa3891c949
      </Background>
    </React.Fragment>
  );
}

const Background = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.main_bg_color};
`;
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
