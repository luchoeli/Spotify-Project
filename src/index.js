import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers'; // carpeta reducers busca por defecto el index.js suyo
import SpotifyComp from './components/SpotifyComp';
import './index.css';

const store = createStore(rootReducer);

render(
  <Provider store={store}> 
    <SpotifyComp />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();