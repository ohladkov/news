import { ADD_POST, VIEW_POST } from '../actions';

const post = (state = {}, { type, id, title, author }) => {
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        id,
        title,
        author,
      };

    case VIEW_POST:
      if (state.id !== id) {
        return state;
      }

      return {
        ...state,
        isViewed: true,
      };

    default:
      return state;
  }
};

export default post;
