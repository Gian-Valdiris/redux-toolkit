import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

import {Provider} from 'react-redux';
import { myStore,PersistGate,persistor } from './redux/store';
import Load from './components/Load';

/**
 * El provider me sirve para prover el store a toda mi apliacion 
 * el persisGate es para el uso de redux-persist
 */

ReactDOM.render(
  <Provider  store={myStore}>
    <PersistGate persistor={persistor} >
      <Load />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
