import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'; // carpeta reducers busca por defecto el index.js suyo
import SpotifyComp from './components/SpotifyComp';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";



const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
 );

ReactDOM.render(
  <Provider store={store}>
    <SpotifyComp/>
  </Provider>,
  document.getElementById('root')
)
    //<App/>
serviceWorker.unregister();