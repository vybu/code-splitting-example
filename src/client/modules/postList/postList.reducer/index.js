import { combineReducers } from 'redux';
import { byId } from './postsById';
import { idList } from './postsIdList';

export const posts = combineReducers({
  byId,
  idList,
});
