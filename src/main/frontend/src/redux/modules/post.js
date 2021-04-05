import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
/* import 'moment';
import moment from 'moment'; */

// initialState
const initialState = {
  list: [],
  detailPost: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false
};
// actions
const SET_DETAIL_POST = 'SET_DETAIL_POST';
const ADD_POST = 'ADD_POST';

// action creators
const setDetailPost = createAction(SET_DETAIL_POST, (post) => ({ post }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const fetchPostById = (postId) => {
  return function (dispatch, getState, { history }) {
    axios.get(`/api/post/${postId}`).then((res) => {
      dispatch(setDetailPost(res.data));
    });
  };
};

// reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [SET_DETAIL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.detailPost = action.payload.post;
        //draft.list.unshift(action.payload.post);
      })
  },
  initialState
);
// action creator export
const actionCreators = {
  addPost,
  fetchPostById
};

export { actionCreators };
