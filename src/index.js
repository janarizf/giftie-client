import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
      <GoogleOAuthProvider clientId="420870060102-3t8r9rokccua0iasbpu67ua2cqtfrhsq.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
