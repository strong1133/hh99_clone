import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { setCookie, getCookie, deleteCookie } from '../../shared/Cookie';
import axios from 'axios';

// actions
// const LOG_IN = "LOG_IN";
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_user';
const SET_USER = 'SET_USER';

// actionCreators: createAction
// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false
};

const signupAPI = (userName, nickname, pw) => {
  return function (dispatch, getState, { history }) {
    console.log(userName, nickname, pw);
    const API = 'http://localhost:8080/api/signup';
    console.log(API);
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userName,
        password: pw,
        nickname: nickname
      })
    })
      .then((response) => response)
      .then((result) => {
        window.alert('회원가입이 되었습니다!');
        history.push('/');
      });
  };
};

const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    const API = 'http://localhost:8080/api/authenticate';

    axios({
      url: 'http://localhost:8080/api/authenticate',
      method: 'post',
      data: { username: id, password: pw },
      withCredentials: true
    })
      .then((res) => {
        console.log('로그인', res.data.token);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${res.data.token}`;

        dispatch(getUserInfo());
      })
      .catch((err) => {
        console.error(err);
        alert('로그인에 실패했습니다');
      });
  };
};

const getUserInfo = () => {
  return function (dispatch, getState, { history }) {
    axios.get('/api/user').then((res) => {
      console.log('getUserInfo', res);
      dispatch(
        setUser({ username: res.data.username, nickname: res.data.nickname })
      );
      history.replace('/');
    });
  };
};

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(
        setUser({
          username: 'username',
          nickname: 'nickname',
          kakaoId: 'kakaoId'
        })
      );
    } else {
      dispatch(logoutCheck());
    }
  };
};
const logoutCheck = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem('token');
    dispatch(logOut());
    history.replace('/');
  };
};

const isLogin = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }
  return true;
};

console.log(isLogin);

// reducer: handleActions(immer를 통한 불변성 유지)
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      })
  },
  initialState
);

// actionCreator export
const actionCreators = {
  logOut,
  getUser,
  signupAPI,
  loginAPI,
  isLogin,
  loginCheck,
  logoutCheck,
  getUserInfo
};

export { actionCreators };
