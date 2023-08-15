import { combineReducers } from 'redux';
import currentItemReducer from './currentItem';
import factReducer from './fact';
import dataReducer from './data';

const rootReducer = combineReducers({
  data: dataReducer,
  currentItem: currentItemReducer,
  fact: factReducer,
});

export default rootReducer;