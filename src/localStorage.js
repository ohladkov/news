const STATE = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE);
    if (!serializedState) return;

    return JSON.parse(serializedState);
  } catch(error) {
    return;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE, serializedState);
  } catch(error) {
    return;
  }
}
