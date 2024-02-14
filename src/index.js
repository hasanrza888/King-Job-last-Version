import React from 'react';
import './styles/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./store/store";
import ScrollToTop from './utils/scrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import { hydrate, render } from "react-dom";

const AllContent = (
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop />
        <App />  
      </HelmetProvider>
    </BrowserRouter> 
  </Provider>
)
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(AllContent, rootElement);
} else {
  render(AllContent, rootElement);
}