import { v4 } from 'node-uuid';
import { DEFAULT_AUTHOR } from '../utils/constants';

export const ADD_POST = 'ADD_POST';
export const VIEW_POST = 'VIEW_POST';

export const addPost = (title) => ({
  type: ADD_POST,
  id: v4(),
  title,
  author: DEFAULT_AUTHOR,
});

export const viewPost = (id) => ({
  type: VIEW_POST,
  id,
});
