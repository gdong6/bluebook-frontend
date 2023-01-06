import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { reducers } from './reducers';


import { GoogleOAuthProvider } from '@react-oauth/google';

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

//dotenv.config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <GoogleOAuthProvider clientId='1044795241504-peraab3f4j015psara6090fh5v8p5r3q.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  
);


