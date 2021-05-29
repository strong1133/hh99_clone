import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// actionCreators: createAction
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

const signupAPI = (userName, nickname, pw) => {
  return function (dispatch, getState, { history }) {
    const API = "http://strong1133.shop/api/singup";

    axios({
      url: API,
      method: "POST",
      data: { username: userName, password: pw, nickname: nickname },
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((res) => {
      window.alert("회원가입이 되었습니다!");
      history.push("/");
    });
  };
};

const loginAPI = (id, pw) => {
  return function (dispatch, getState, { history }) {
    const API = "http://strong1133.shop/api/authenticate";

    axios({
      url: API,
      method: "POST",
      data: { username: id, password: pw },
      withCredentials: true,
    })
      .then((res) => {
        localStorage.setItem(res.data.token);
        dispatch(getUserInfoAPI());
      })
      .catch((err) => {
        alert("로그인에 실패했습니다");
      });
  };
};

const getUserInfoAPI = () => {
  return function (dispatch, getState, { history }) {
    axios.get("/api/user").then((res) => {
      dispatch(
        setUser({ username: res.data.username, nickname: res.data.nickname })
      );
      history.replace("/");
    });
  };
};

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(
        setUser({
          username: "username",
          nickname: "nickname",
          kakaoId: "kakaoId",
        })
      );
    } else {
      dispatch(logoutCheck());
    }
  };
};

const logoutCheck = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    dispatch(logOut());
    history.replace("/");
  };
};


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
      }),
  },
  initialState
);

// actionCreator export
const actionCreators = {
  logOut,
  signupAPI,
  loginAPI,
  loginCheck,
  logoutCheck,
};

export { actionCreators };
