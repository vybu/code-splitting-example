import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { rootReducer } from './store/rootReducer';
import { setPresetItems } from './modules/postList/postList.actions';
import StatsPage from './StatsPage';
import PostBoardPage from './PostBoardPage';
import CreatePostDialog from './CreatePostDialog';
import './base-styles.css';

const store = createStore(
  rootReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
);

store.dispatch(setPresetItems());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route path="/stats" component={StatsPage} />
        <Route exact path="/(create-post)?" component={PostBoardPage} />
        <Route path="/create-post" component={CreatePostDialog} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
