import { combineReducers } from 'redux';
import posts, * as fromPosts from './posts';

const blogApp = combineReducers({
  posts,
});

export default blogApp;

export const getAllPosts = (state) => fromPosts.getAllPosts(state.posts);
