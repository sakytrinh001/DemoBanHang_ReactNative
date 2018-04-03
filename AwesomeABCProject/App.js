/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {DrawerNav} from './src/Router'


export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   Ionicons.loadFont()
  // }
 
  render() {
    return (
      <DrawerNav />
    );
  }
}

