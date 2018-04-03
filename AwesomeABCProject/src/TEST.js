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
  TouchableOpacity,
  View,
  NavigatorIOS,
  TextInput,
  Button,
  Alert
} from 'react-native';
import PropTypes from 'prop-types';

class InputView extends Component {

  render(){
    return(
      <TextInput 
      {...this.props}
      />
    )
  };

}
const defaultUser = {user:'Vinh', pass:'123456'};


export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
        text:'abc',
        textPass: '123'
    };
  }

  onPush = () => {
    this.props.navigation.navigate('ForgotPass');
    if(this.state.text == defaultUser.user && this.state.textPass == defaultUser.pass){
    //   
            //  Alert.alert(defaultUser.user)   
    }else{
      // Alert.alert('error user')
    }
       // if this.props.userName = this.props.
   }


  render() {
    // const { navigate } = this.props.navigation;

    return (

        <View style={styles.container}>
          <View style= {{paddingTop:20}}>
          
            <Text>UserName</Text>
            
            <InputView style={{borderWidth : 0.5 , width: 200}}  onChangeText = {(text) => this.setState({text: text})}
            // value = {'text'}
            
            />

            <Text>Password</Text>
            <InputView style={{borderWidth : 0.5 , width: 200}}  onChangeText = {(text) => this.setState({textPass: text})}
            
      />
            <Text>user: {defaultUser.user }, pass: {defaultUser.pass } </Text>
          </View>




          <TouchableOpacity onPress= {this.onPush}>
            <View style = {{backgroundColor: 'blue', borderRadius: 5, width: 50, height: 35,justifyContent:'center'}}>
                <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
                
                
              </View>
            </TouchableOpacity>
     
        </View>
        
        
    );
  }

}

const styles = StyleSheet.create({

  personTextColor : {
    color : 'blue'
  },
  style1: {
    // flex: 1,
    width: 100,
    height:100,
    backgroundColor:'yellow',
    borderWidth: 0.5
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});