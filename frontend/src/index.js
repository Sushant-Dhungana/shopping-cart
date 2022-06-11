import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import productsReducer from './features/productSlice';



const store = configureStore({
  reducer:{
    products: productsReducer,
  }
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);


