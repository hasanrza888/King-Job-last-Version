import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./store/store";
import ScrollToTop from './utils/scrollToTop';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop />
        <App />  
      </HelmetProvider>
    </BrowserRouter> 
  </Provider>
  
);