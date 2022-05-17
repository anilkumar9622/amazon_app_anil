import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import reportWebVitals from './paymentGateway/reportWebVitals';

ReactDOM.render(
  <BrowserRouter> 
  <Provider store={store}>
       <App />
    </Provider>
  </BrowserRouter>
,
  document.getElementById('root')
  
);
reportWebVitals();
