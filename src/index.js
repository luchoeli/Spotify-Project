import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'; // carpeta reducers busca por defecto el index.js suyo

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import { loadState, saveState } from './localstorage/localStorage.js'

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(
    store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
)
//<App/>
serviceWorker.unregister();