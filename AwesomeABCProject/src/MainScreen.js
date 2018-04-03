/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
  Keyboard,
  AsyncStorage,
} from 'react-native';

import LoginScreen from './LoginScreen';
import { NavigationActions } from 'react-navigation';
import { KeyboardSpacer } from 'react-native-keyboard-spacer';
import { Switch } from 'react-native-switch';
import TextInput from './TextInput'
import TextCustom from './ViewContains/TextCustom'
import TextInputCustom from './ViewContains/TextInputCustom'
import HeaderView from './ViewContains/HeaderView'
import { DrawerButton } from './Router'

const { width, height } = Dimensions.get('window')
const { isLogin } = false

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.passTextInput = null
    this.state = {
      textUser: '',
      textPass: '',
      arrData: []
    };
  }
  state = {
    taskCreated: false,
    statusValue: '',
  };

  onTest() {
    if (isLogin == true) {
      Alert.alert("Changed", "==> " + this.state.taskCreated + "-" + this.state.statusValue);
    }

  }

  componentWillMount() {
    // this.postAPI()


  }


  componentDidMount() {
    AsyncStorage.getItem("User").then((value) => {
      this.setState({ textUser: value });
    }).done();
    AsyncStorage.getItem("Pass").then((value) => {
      this.setState({ textPass: value });
    }).done();
    if (this.state.textUser.length > 0 && this.state.textPass.length > 0) {
      this.onButtonLogin()
    }

  }

  getInitialState() {
    return {};
  }

  onChangeFunction(newState) {
    if (this.state.taskCreated == true) {
      this.state.statusValue = 'SAI'
    } else {
      this.state.statusValue = 'DUNG'
    }
    this.setState(newState, () => Alert.alert("Changed", "==> " + this.state.taskCreated + "-" + this.state.statusValue));
  }

  onButtonLogin() {
    if (this.strLength(this.state.textPass) < 6) {
      Alert.alert('Thong bao', 'Mat khau phai nhieu hon 6 ky tu!')
    } else {
      if (this.state.textUser != '' && this.state.textPass != '') {
        AsyncStorage.setItem('User', this.state.textUser)
        AsyncStorage.setItem('Pass', this.state.textPass)
        Alert.alert('Thong bao', 'Nhap user', [{ text: 'Dong Y', onPress: () => { this.props.navigation.navigate('MainScreen', { user: this.state.textPass + this.state.textUser }) } }], { cancelable: false })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderView
          onPressLeft={() => { this.props.navigation.navigate('DrawerOpen'); }}
          titleHeader={'Home'}
          iconLeft={require('./imagesrc/menu.png')}
        />
        <View style={{ flex: 1, width, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
          <TextCustom style={{ fontSize: 40 }}>
            DANG NHAP
          </TextCustom>
          <TextInputCustom>
            <TextInput style={styles.textInputStyle}
              autoFocus={true}
              returnKeyType={'next'}
              placeholder='Username'
              onChangeText={(text) => this.setState({ textUser: text })}
              onSubmitEditing={(event) => {
                this.passTextInput.focus()
              }}
              value={this.state.textUser}
            />
          </TextInputCustom>
          <TextInputCustom>
            <TextInput style={styles.textInputStyle}
              inputRef={(input) => {
                this.passTextInput = input
              }}
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={(text) => this.handleChange(text)}
              value={this.state.textPass}
            />
          </TextInputCustom>

          <View style={{ height: 30, width: width - 20, marginTop: 10 }}>
            <Switch style={{ height: 30, width: width - 20, justifyContent: 'center' }}
              value={this.state.taskCreated}
              onValueChange={(value) => this.onChangeFunction({ taskCreated: value })}
              activeText={'Bat'}
              inActiveText={'Tắt'}
              circleSize={30}
              barHeight={20}
              backgroundActive={'green'}
              backgroundInactive={'gray'}
              circleActiveColor={'#30a566'}
              circleInActiveColor={'#000000'}
            />
          </View>
          <TouchableOpacity style={{ height: 40, width: 180, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { this.onButtonLogin() }}
          >
            <Text>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 40, width: 180, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { this.onNextKeyboard('ScrollViewKeyboard') }}
          >
            <Text>
              KeyboardScroll
            </Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ height: 40, width: 180, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { this.onNextKeyboard('SectionListBasics') }}
          >
            <Text>
              SectionList
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40, width: 180, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { this.onNextKeyboard('TabbarCustom') }}
          >
            <Text>
              Tabbar
            </Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ height: 40, width: 180, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { this.onNextKeyboard('ViewScreenTabbar') }}
          >
            <Text>
              TabbarTopBottom
            </Text>

          </TouchableOpacity>
          
        </View>
      </View>
    );

  }

  handleChange(text) {
    this.setState({ textPass: text })
    console.log('Thanh ' + this.strLength(text))
  }

  strLength(s) {
    var length = 0;
    while (s[length] !== undefined)
      length++;
    return length;
  }

  onTouchLeft() {
    this.props.navigation.navigate('DrawerOpen');
  }

  onNextKeyboard(view) {
    this.props.navigation.navigate(view)
  }

  saveData(value) {
    AsyncStorage.setItem("User", value);
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewContainsInputStyle: {
    height: 40,
    borderWidth: 0.5,
    width: width - 20,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  textInputStyle: {
    flex: 1,
    marginLeft: 10,

  },
});
AppRegistry.registerComponent('MainScreen', () => MainScreen);