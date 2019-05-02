import { combineReducers } from 'redux';
import { ADD_POST, VIEW_POST } from '../actions';
import post from './post';

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST:
    case VIEW_POST:
      return {
        ...state,
        [action.id]: post(state[action.id], action),
      };

    default:
      return state;
  }
};

const allIds = (state = [], { type, id }) => {
  switch (type) {
    case ADD_POST:
      return [...state, id];

    default:
      return state;
  }
};

const posts = combineReducers({
  byId,
  allIds,
});

export default posts;

export const getAllPosts = (state) => state.allIds.map((id) => state.byId[id]);
