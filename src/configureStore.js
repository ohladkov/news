import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import { SAVE_STATE_TIMEOUT } from './utils/constants'

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  if (!console.group) return rawDispatch;

  return (action) => {
    console.group(action.type);

    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action type', 'color: blue', action.type);

    const returnValue = rawDispatch(action);

    console.log('%c next state', 'color: green', store.getState());

    console.groupEnd(action.type);

    return returnValue;
  };
};

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState);

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  store.subscribe(
    throttle(() => {
      saveState({
        posts: store.getState().posts,
      });
    }, SAVE_STATE_TIMEOUT),
  );

  return store;
};

export default configureStore;
