import { combineReducers } from 'redux';

const emptyReducer = function () {
  return {};
};

const combinedReducers = combineReducers({
  emptyReducer
});

export default combinedReducers;