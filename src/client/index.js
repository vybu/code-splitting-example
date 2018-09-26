import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from 'loadable-components';
import { asyncStoreCreator } from 'async-redux-store-enhancer';
import { createRootReducer } from './store/rootReducer';
import { setPresetItems } from './modules/postList/postList.actions';
import PostBoardPage from './PostBoardPage';
import './base-styles.css';

export const DynamicStatsPage = loadable(() => import(/* webpackChunkName: "StatsPage" */'./StatsPage'));
export const DynamicCreatePostDialog = loadable(() => import(/* webpackChunkName: "CreatePostDialog" */'./CreatePostDialog'));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = asyncStoreCreator(createStore, applyMiddleware, composeEnhancers)(createRootReducer);

store.dispatch(setPresetItems());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route path="/stats" component={DynamicStatsPage} />
        <Route exact path="/(create-post)?" component={PostBoardPage} />
        <Route path="/create-post" component={DynamicCreatePostDialog} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
