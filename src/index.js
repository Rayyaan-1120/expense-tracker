import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import datareducer from './features.js/datareducer';
import collectedreducer from './features.js/dataarray'

const store = configureStore({
  reducer:{
     data:datareducer,
     maindata:collectedreducer
  }
})


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>

    </React.StrictMode>,
    document.getElementById('root')
  );