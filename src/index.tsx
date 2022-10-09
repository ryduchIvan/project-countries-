import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </PersistGate>
  </React.StrictMode>
);
