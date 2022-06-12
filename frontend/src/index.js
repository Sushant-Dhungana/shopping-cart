import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import productsReducer from './features/productsSlice';
import { productsFetch } from './features/productsSlice';
import { productsApi } from './features/productsApi';
import cartReducer from './features/cartSlice';



const store = configureStore({
  reducer:{
    products: productsReducer,
    [productsApi.reducerPath] : productsApi.reducer,
    cart: cartReducer,
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});


store.dispatch(productsFetch())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);


