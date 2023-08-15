import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

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
  fact: '',
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;