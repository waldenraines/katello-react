import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Third party CSS
import 'patternfly/dist/css/patternfly.css';
import 'patternfly/dist/css/patternfly-additions.css';

// Application specific CSS
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import RedHatRepositoriesPage from './containers/RedHatRepositoriesPage';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <RedHatRepositoriesPage productId="16" />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
