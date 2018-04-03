import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class ViewTest extends Component 
{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{width, height, backgroundColor: 'yellow', position: 'absolute'}}>
                </View>
                <View style={{width: 40, height: 40, position:"relative",backgroundColor: 'red'}}>
                </View>
            </View>

        )
    }
}