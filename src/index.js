import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'; // carpeta reducers busca por defecto el index.js suyo
import SpotifyComp from './components/SpotifyComp';
import App from './App.js';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <SpotifyComp/>
  </Provider>,
  document.getElementById('root')
)
    //<App/>
serviceWorker.unregister();