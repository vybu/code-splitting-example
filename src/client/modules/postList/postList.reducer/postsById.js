import { CREATE_POST, SET_PRESET_ITEMS } from '../postList.actions';

export const byId = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case SET_PRESET_ITEMS:
      return {
        ...state,
        ...action.payload.reduce((list, post) => {
          list[post.id] = post; //eslint-disable-line
          return list;
        }, {}),
      };
    default:
      return state;
  }
};
