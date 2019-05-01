import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const SAVE_STATE_TIMEOUT = 1000;

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState);

  store.subscribe(
    throttle(() => {
      saveState({
        posts: store.getState().posts
      });
    }, SAVE_STATE_TIMEOUT),
  );

  return store;
};

export default configureStore;
