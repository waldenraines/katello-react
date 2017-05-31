import { createStore } from 'redux';
import combinedReducers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    combinedReducers,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}