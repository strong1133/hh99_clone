import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
/* import 'moment';
import moment from 'moment'; */

// initialState
const initialState = {
  commentList: []
};
// actions
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';

// action creators
const setComment = createAction(SET_COMMENT, (comments) => ({ comments }));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const removeComment = createAction(REMOVE_COMMENT, (commentId) => ({
  commentId
}));
const editComment = createAction(EDIT_COMMENT, (post) => ({ post }));

//게시글 아이디에 해당하는 댓글 조회  "GET"
// 댓글 작성  "POST"  /api/comments
// 댓글 수정  "PUT"  /api/comments/{id}
// 댓글 삭제  "DELETE"   /api/comments/{id}

//thunk
const readComment = (articleId) => {
  return function (dispatch, getState, { history }) {
    axios.get(`/api/comments/${articleId}`).then((res) => {
      console.log(res.data);
      dispatch(setComment(res.data));
    });
  };
};

const createComment = (comment) => {
  return function (dispatch, getState, { history }) {
    axios.post(`/api/comments`, comment).then((res) => {
      dispatch(addComment(res.data));
    });
  };
};

const updateComment = (id, comment) => {
  return function (dispatch, getState, { history }) {
    axios.put(`/api/comments/${id}`, comment).then((res) => {
      dispatch(editComment(res.data));
    });
  };
};

const deleteComment = (id) => {
  return function (dispatch, getState, { history }) {
    axios.delete(`/api/comments/${id}`).then((res) => {
      dispatch(removeComment(res.data));
    });
  };
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
        draft.commentList = action.payload.comments;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.commentList.unshift(action.payload.comment);
      }),
    [REMOVE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.detailPost = action.payload.post;
        //draft.list.unshift(action.payload.post);
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.detailPost = action.payload.post;
        //draft.list.unshift(action.payload.post);
      })
  },
  initialState
);
// action creator export
const actionCreators = {
  readComment,
  createComment,
  updateComment,
  deleteComment
};

export { actionCreators };
