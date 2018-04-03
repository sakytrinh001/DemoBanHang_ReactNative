import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  AsyncStorage,
  TouchableOpacity,
  Alert,
} from 'react-native';


import { NavigationActions } from 'react-navigation';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
import KeyboardSpacer from 'react-native-keyboard-spacer';
import TextInputCustom from './ViewContains/TextInputCustom'
const { width, height } = Dimensions.get('window')


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveText: '',
      textPass: ''
    };
  }


  
  componentDidMount() {
    AsyncStorage.getItem("saveText").then((value) => {
      this.setState({ "saveText": value });
    }).done();
    if (this.props.navigation != null){
      Alert.alert(this.props.navigation.state.params.user)
    }
  }

  getInitialState() {
    return {};
  }
  render() {
    return (
      <View style={[{ flex: 1, backgroundColor: 'white' }]}>
        <View style={styles.containerView}>
          <Text style={{ marginBottom: 10 }}>
            {this.state.saveText}
          </Text>
          <TextInputCustom >
            <TextInput style={{ marginLeft: 10, marginRight: 10,
              height: 40, backgroundColor: 'white'
            }}
              onChangeText={(text) => this.saveData(text)}
              placeholder='TEST'
              maxLength={10}
            />
          </TextInputCustom>

          <TouchableOpacity style={{ height: 16, width }}
            onPress={() => { this.props.navigation.navigate('ForgotPass') }}>
            <Text style={{ color: 'blue', alignSelf: 'flex-start', marginLeft: 10 }}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionTouch}
            onPress={() => { this.goBackMain() }}>
            <Text>
              TEST BACK
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionTouch}
            onPress={() => { this.props.navigation.navigate('ListView') }}
          >
            <Text>
              LIST VIEW
          </Text>

          </TouchableOpacity>
        </View>

      </View>
    );
  }

  goBackMain() {
    Alert.alert('Thong bao', 'TEST BACK', [{
      text: 'Dong Y', onPress: () => { this.props.navigation.dispatch(NavigationActions.back('LoginScreen')) }
    }], { cancelable: false })
  }

  saveData(value) {
    AsyncStorage.setItem("saveText", value);
    this.setState({ "saveText": value })
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTouch: {
    height: 40,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
