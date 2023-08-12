import { createStore } from 'redux';

const initObj = () => {
  const objStart = {};

  for (let i = 0; i < 48; i++) {
    objStart[i] = {
      "topText": "test " + i,
      "bottomText": "test " + i,
    };
  }

  return objStart;
}

const initialState = {
  data: { ...initObj() },
  currentItem: {},
};

const reducer = (state = initialState, action) => {
  if (action.type === 'CURRENT_ITEM_CHANGE') {
    state.data[action.id] = {
      topText: action.topText,
      bottomText: action.bottomText
    }
    return {
      ...state,
      currentItem: {
        id: action.id,
        topText: action.topText,
        bottomText: action.bottomText
      }
    }
  }
  // if (action.type === 'UPDATE_TEXT') {
  //   return {
  //     ...state,
  //     [action.id]: {
  //       topText: action.topText,
  //       bottomText: action.bottomText
  //     }
  //   };
  // }

  return state;
};

const store = createStore(reducer);

export default store;