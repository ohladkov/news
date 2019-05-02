import { v4 } from 'node-uuid';
import CONSTANTS from '../utils/constants'

export const ADD_POST = 'ADD_POST';
export const VIEW_POST = 'VIEW_POST';

export const addPost = (title) => ({
  type: ADD_POST,
  id: v4(),
  title,
  test: 'test',
  author: CONSTANTS.DEFAULT_AUTHOR
});

export const viewPost = (id) => ({
  type: VIEW_POST,
  id,
});
