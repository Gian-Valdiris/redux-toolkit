import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { myStore,PersistGate,persistor } from './redux/store';
import Load from './components/Load';

ReactDOM.render(
  <Provider  store={myStore}>
    <PersistGate persistor={persistor} >
      <Load />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
