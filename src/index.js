import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCRJZOv6J8MYtU_-CraYyC72Ttv7loyzEQ",
  authDomain: "gratitudes-ff569.firebaseapp.com",
  databaseURL: "https://gratitudes-ff569.firebaseio.com",
  storageBucket: "gratitudes-ff569.appspot.com",
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
