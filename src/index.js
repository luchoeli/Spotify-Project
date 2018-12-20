import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SpotifyComp from './components/SpotifyComp';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '/reducers'; // carpeta reducers busca por defecto el index.js suyo

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <SpotifyComp test={'xx'}/>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();