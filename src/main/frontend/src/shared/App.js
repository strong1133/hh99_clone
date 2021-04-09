import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import CustomAxious from '../CustomAxios';
import './App.css';
import styled from 'styled-components';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PostList, PostDetail, Login, Signup } from '../pages';
import { history } from '../redux/configureStore';
import PostWrite from '../pages/PostWrite';

function App() {
  return (
    <React.Fragment>
      <Background>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/article/:id" exact component={PostDetail} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/write/:id" exact component={PostWrite} />
        </ConnectedRouter>
      </Background>
    </React.Fragment>
  );
}

const Background = styled.div`
  ${(props) => props.theme.border_box};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.main_bg_color};
`;

export default App;
