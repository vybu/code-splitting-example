import { combineReducers } from 'redux';
import { posts } from '../modules/postList/postList.reducer';

export const createRootReducer = asyncReducers => combineReducers({
  posts,
  ...asyncReducers,
});
