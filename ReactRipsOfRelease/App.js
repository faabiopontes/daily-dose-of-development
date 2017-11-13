import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, View, Teext, Button } from 'react-native';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA-omyitJmqWdZaLw7Zt5Ta1brULZhrgFY",
      authDomain: "fir-udemy-59f38.firebaseapp.com",
      databaseURL: "https://fir-udemy-59f38.firebaseio.com",
      projectId: "fir-udemy-59f38",
      storageBucket: "fir-udemy-59f38.appspot.com",
      messagingSenderId: "495930199170"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Text>My App</Text>
      </View>
    );
  }

}

AppRegistry.registerComponent('firebaseTest', () => App);