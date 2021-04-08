import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// actions
// const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_user";
const SET_USER = "SET_USER";

// actionCreators: createAction
// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actionsCreators
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push("/");
  };
};

const signupAPI = (userName, nickname, pw) => {
  return function (dispatch, getState, { history }) {
    console.log(userName, nickname, pw);
    const API = "http://localhost:8080/api/signup";
    console.log(API);
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: pw,
        nickname: nickname,
      }),
    })
      .then((response) => response)
      .then((result) => {
        window.alert("회원가입이 되었습니다!");
        history.push("/login");
      });
  };
};

const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    const API = "http://localhost:8080/api/authenticate";
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: id,
        password: pw,
      }),
    })
    // .then((response) => response)
    // .then((result) => {
    //     let token = result.headers.get("Authorization");
    //     let tokenken = token.split("Bearer ")[1];
    //     localStorage.setItem(tokenken)
    //     window.alert('로그인 되었습니다');


      .then((response) => response)
      .then((result) => {
        console.log(result);

        if (result.status === 200) {
          let token = result.headers.get("Authorization");
          let tokenken = token.split("Bearer ")[1];
          localStorage.setItem(tokenken)
            
          history.push("/");
        } else {
          window.alert("로그인에 실패했습니다.");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        });
  };
};




// reducer: handleActions(immer를 통한 불변성 유지)
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

// actionCreator export
const actionCreators = {
  logOut,
  getUser,
  loginAction,
  signupAPI,
  loginAPI,
};

export { actionCreators };
