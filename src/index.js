import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA_0h69xrBWiP--FOGzAPm6wIzZUx_7E3Q",
  authDomain: "ecommerce-tiendita.firebaseapp.com",
  projectId: "ecommerce-tiendita",
  storageBucket: "ecommerce-tiendita.appspot.com",
  messagingSenderId: "673610990422",
  appId: "1:673610990422:web:6170d989c5314d0200ccf7"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
