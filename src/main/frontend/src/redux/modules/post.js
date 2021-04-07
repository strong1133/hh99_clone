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
/* String title; // 게시글 제목
String contents; // 게시글 내용
String image; // 게시글 사진링크
String author; // 게시글 작성자


//게시글 수정
@PutMapping("/api/articles/{id}")
//게시글 삭제
@DeleteMapping("/api/articles/{id}")


게시글 수정은 title, contents, image, author + 수정할 게시글 id
게시글 삭제는 삭제할 게시글 id */

const createPost = (post) => {
  return function (dispatch, getState, { history }) {
    axios.post(`/api/articles`, post).then((res) => {
      console.log(res);
      history.push('/');
      //dispatch(addPost(post));
    });
  };
};

const deletePost = (postId) => {
  return function (dispatch, getState, { history }) {
    axios.delete(`/api/articles/${postId}`).then((res) => {
      history.push('/');
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
  fetchPostById,
  createPost,
  deletePost
};

export { actionCreators };
