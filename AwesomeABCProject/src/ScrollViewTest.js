

import React, { Component } from 'react';
import { Image, ScrollView, Dimensions, Text, TouchableOpacity, View, Alert } from 'react-native';
const { width, height } = Dimensions.get('window')
import { NavigationActions } from 'react-navigation';
import Modal from 'react-native-modal'

export default class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAPI: ''
    };
  }

  state = {
    isModalVisible: false
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  componentWillMount() {
    // this.getAPI();
    Alert.alert()
  }

  render() {
    return (
      <ScrollView>
        <Image
          source={{ uri: 'https://kenh14cdn.com/2017/223238498189853349474221480315508o-1507458888625.jpg' }}
          resizeMode='cover'
          style={{ height: 200, width, flex: 1, backgroundColor: 'white' }}
        />
        <Text>
          {this.state.textAPI}
          sdjfklsjfkjdsk;fjskl;djfklsjfkljdslkjfslkjfksjfkslfdlskjflssfdsfkljsdfkl
          skfhdslflksjflkjsdklfjlksdj {this.props.navigation.state.params.object}
        </Text>
        <TouchableOpacity style={{ width: 100, height: 40 }} underlayColor='#fff'
          onPress={this._toggleModal}>
          <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>
            BACK HOME
                     </Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ backgroundColor: 'white', height, width, marginLeft: -20, marginTop: -10 }}>
            <View style={{ backgroundColor: 'red', height: 40, marginTop: 24 }}>
              <View style={{height: 16, width: 16}}>
                  <Image source={require('./imagesrc/GEmail.png')} style={{height: 16, width: 16}}>
                  </Image>
              </View>
              <Text style={{ textAlignVertical: "center", textAlign: "center" }}>Hiiiz</Text>
            </View>
            <Text style={{ color: 'red', marginLeft: 20 }}>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    );
  }

  async getAPI() {
    try {
      let response = await fetch(
        'https://facebook.github.io/react-native/movies.json'
      );
      let responseJson = await response.json();
      this.setState({ textAPI: responseJson.description });
    } catch (error) {
      console.error(error)
    }
  }

}