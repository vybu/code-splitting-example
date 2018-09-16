import { combineReducers } from 'redux';
import { posts } from '../modules/postList/postList.reducer';
import { postForm } from '../modules/postFormDialog/postForm.reducer';

export const rootReducer = combineReducers({
  posts,
  postForm,
});
