import { createStore } from 'redux';

const initObj = () => {
  const objStart = {};

  for (let i = 0; i < 48; i++) {
    objStart[i] = {
      "topText": "test",
      "bottomText": "test",
    };
  }

  return objStart;
}

const initialState = { ...initObj() };

const reducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_TEXT') {
    return {
      ...state,
      [action.id]: {
        topText: action.topText,
        bottomText: action.bottomText
      }
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;