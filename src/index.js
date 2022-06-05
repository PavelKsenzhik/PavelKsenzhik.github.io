import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './componets/app';

// Styles for Calendar
import 'react-day-picker/dist/style.css';
// Main styles
import './index.css';

import store from './redux/store'

// Dev
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
