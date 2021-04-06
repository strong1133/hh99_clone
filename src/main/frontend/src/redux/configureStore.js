import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
<<<<<<< HEAD
import  Post from './modules/post';
import  User  from './modules/user';
=======
import Post from './modules/post';
import Comment from './modules/comment';
>>>>>>> 7c176832f6b0752f2cad37d7010d8afa3891c949

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  post: Post,
<<<<<<< HEAD
  user: User,
=======
  comment: Comment,
>>>>>>> 7c176832f6b0752f2cad37d7010d8afa3891c949

  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })]; // history-thunk 연결

const env = process.env.NODE_ENV;

if (env === 'development') {
  const { logger } = require('redux-logger'); // if문 안에서만 쓰려고
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
