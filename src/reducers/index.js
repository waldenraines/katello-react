import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';
import merge from 'lodash/merge';

import {
  REDHAT_REPOSITORIES_REQUEST, REDHAT_REPOSITORIES_SUCCESS, REDHAT_REPOSITORIES_FAILURE
} from '../actions/RedHatRepositories';

const entities = (state = Immutable({}), action) => {
  switch (action.type) {
    case REDHAT_REPOSITORIES_SUCCESS:
      return merge({ redHatRepositories: action.response }, state);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  entities
});

export default rootReducer;
