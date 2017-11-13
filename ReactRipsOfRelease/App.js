import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native';

export default class App extends React.Component {

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
      <View style={styles.container}>
        <Text>My React Native + Firebase app without Bugs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('firebaseTest', () => App);