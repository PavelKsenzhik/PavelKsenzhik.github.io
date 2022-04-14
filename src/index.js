import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './componets/app';
import './index.css';

import store from './redux/store'

// Dev
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
