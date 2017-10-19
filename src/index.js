import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
);
unregister();
