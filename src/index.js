import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'patternfly/dist/css/patternfly.css'
import 'patternfly/dist/css/patternfly-additions.css'


import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
