import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// :: 전역 저장공간 적용
import store from "./redux/store";
import { Provider } from "react-redux";

// :: 전역스타일 적용
import GlobalStyle from './assets/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);


reportWebVitals();
