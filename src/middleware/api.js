import axios from 'axios';
import { camelizeKeys } from 'humps';
import __ from '../i18n';

// TODO: make configurable based on rails
const API_ROOT = 'http://localhost/katello/api/v2/';

// Initialize a mock API, TODO: replace with actual API calls
import initializeMockAPI from './mockApi'; // eslint-disable-line import/first, import/newline-after-import
initializeMockAPI(axios, { delayResponse: 2000 });

const apiGetRequest = (endpoint) => {
  const config = {
    baseUrl: API_ROOT,
    url: endpoint
  };

  return axios.get(endpoint, config)
    .then(response => camelizeKeys(response.data))
    .catch(error => Promise.reject(error));
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => (action) => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { types } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return apiGetRequest(endpoint).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || __('Something bad happened')
    }))
  );
};
