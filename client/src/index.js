import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from '@lyket/react';

ReactDOM.render(
  <BrowserRouter>
    <Provider apiKey="pt_f459f86d8733771aeed6cf4e0258e9">
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


