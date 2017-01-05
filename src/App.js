import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCRJZOv6J8MYtU_-CraYyC72Ttv7loyzEQ",
  authDomain: "gratitudes-ff569.firebaseapp.com",
  databaseURL: "https://gratitudes-ff569.firebaseio.com",
  storageBucket: "gratitudes-ff569.appspot.com",
};
const gratitudes_firebase = firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: {title: 'Bread'}
    };
    // this.gratRef = this.getRef().child('items');

  }
  // getRef() {
  //   return gratitudes_firebase.database().ref();
  // }
  //
  // listenForItems(itemsRef) {
  //     const rootRef = gratitudes_firebase.database().ref().child('gratitudes-ff569');
  //     const gratRef = rootRef.child('items');
  //     // itemsRef.on('value', (snap) => {
  //     gratRef.on('value', (snap) => {
  //
  //       // get children as an array
  //       var items = [];
  //       snap.forEach((child) => {
  //         items.push({
  //           title: child.val().title,
  //           _key: child.key
  //         });
  //       });
  //       this.setState({
  //         items: this.state.items
  //       });
  //       // this.setState({
  //       //   dataSource: this.state.dataSource.cloneWithRows(items)
  //       // });
  //
  //     });
  //   }
  //
  //   componentDidMount() {
  //     // this.listenForItems(this.itemsRef);
  //     this.listenForItems(this.gratRef);
  //
  //   }
componentDidMount() {
  const rootRef = gratitudes_firebase.database().ref().child('gratitudes-ff569');
  const gratRef = rootRef.child('items');
  gratRef.on('value', snap => {
    this.setState({
      items: {title: snap.val()}
    });
  });
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Gratitudes</h2>
        </div>
        <div className="App-List">
          <h3>Recent Gratitudes</h3>
          <h1>{this.state.items.title}</h1>

        </div>

      </div>
    );
  }
}

export default App;
