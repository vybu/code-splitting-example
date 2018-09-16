import { SET_AUTHOR, SET_BODY } from './postForm.actions';

export const postForm = (state = { authorName: '', body: '' }, action) => {
  switch (action.type) {
    case SET_AUTHOR:
      return { ...state, authorName: action.payload };
    case SET_BODY:
      return { ...state, body: action.payload };
    default:
      return state;
  }
};
