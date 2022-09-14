import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';
import {Provider} from 'react-redux';
import store from './Redux/Store/store';

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
document.getElementById('root')
);


