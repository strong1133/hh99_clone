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
/* 
private String title;           // 게시글 제목
private String contents;        // 게시글 텍스트형태 (메인 미리보기용)
private String contentsHtml;    // 게시글 Html형태
private String contentsMd;      // 게시글 MarkDown 형태
private String image;           // 게시글 사진링크
private String author;          // 게시글 작성자
*/

const createPost = (post) => {
  return function (dispatch, getState, { history }) {
    console.log('createPost', post);
    axios.post(`/api/articles`, post).then((res) => {
      history.push('/');
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

const updatePost = (postId, post) => {
  return function (dispatch, getState, { history }) {
    axios.put(`/api/articles/${postId}`, post).then((res) => {
      history.push('/');
    });
  };
};

/* 
@PostMapping("/api/liked/add")
// 좋아요 카운트 감소
@DeleteMapping("/api/liked/delete") */
const likePost = (postId, userId) => {
  return function (dispatch, getState, { history }) {
    console.log('좋아요', postId, userId);
    /* axios.post(`/api/liked/add"`, { postId, userId }).then((res) => {
      console.log('라이크완료, 여기처리해야함');
    }); */
  };
};

const dislikePost = (postId, userId) => {
  return function (dispatch, getState, { history }) {
    console.log('좋아요 취소', postId, userId);
    /* axios.post(`/api/liked/delete"`, { postId, userId }).then((res) => {
      console.log('디스라이크완료, 여기처리해야함');
    }); */
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
  deletePost,
  updatePost,
  setDetailPost,
  likePost,
  dislikePost
};

export { actionCreators };
