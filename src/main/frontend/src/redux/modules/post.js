import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
/* import 'moment';
import moment from 'moment'; */

// initialState
const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false
};
// actions
const ADD_POST = 'ADD_POST';

// action creators
const addPost = createAction(ADD_POST, (post) => ({ post }));

// middleware actions

const addPostFB = (contents, phraseList) => {
  return function (dispatch, getState, { history }) {};
};

// reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      })
  },
  initialState
);
// action creator export
const actionCreators = {
  addPost
};

export { actionCreators };
