import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

// Make sure you swap this out with your Firebase app's config
const config = {
  apiKey: "AIzaSyCRJZOv6J8MYtU_-CraYyC72Ttv7loyzEQ",
  authDomain: "gratitudes-ff569.firebaseapp.com",
  databaseURL: "https://gratitudes-ff569.firebaseio.com",
  storageBucket: "gratitudes-ff569.appspot.com",
};


const gratitudes = firebase.initializeApp(config).database().ref();



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Gratitudes</h2>
        </div>

      </div>
    );
  }
}

export default App;
