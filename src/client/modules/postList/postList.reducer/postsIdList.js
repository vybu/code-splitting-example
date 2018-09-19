import { CREATE_POST, SET_PRESET_ITEMS } from '../postList.actions';

export const idList = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [action.payload.id, ...state];
    case SET_PRESET_ITEMS:
      return [...state, ...action.payload.map(post => post.id)];
    default:
      return state;
  }
};
