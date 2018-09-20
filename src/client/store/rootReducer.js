import { combineReducers } from 'redux';
import { posts } from '../modules/postList/postList.reducer';
import { postForm } from '../modules/postForm/postForm.reducer';

export const rootReducer = combineReducers({
  posts,
  postForm,
});
