import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import Post from './modules/post';

export const history = createBrowserHistory();
const rootReducer = combineReducers({
  post: Post,

  router: connectRouter(history)
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
