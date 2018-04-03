import React, { Component } from 'react';
import { Image, ScrollView, Dimensions, TextInput, TouchableOpacity, View, Event, ReactNative, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Modal from 'react-native-modal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width, height } = Dimensions.get('window')
export default class ForgotPass extends React.Component {

    _scrollToInput(reactNode) {
        this.scroll.scrollToFocusedInput(reactNode)
    }

    render() {
        return (
            <KeyboardAwareScrollView innerRef={ref => { this.scroll = ref }} >
                <View style={{justifyContent: 'center', flex: 1, height, backgroundColor: 'yellow'}}>
                    <View style={{backgroundColor: 'green', height: 200}}>
                        <Text style={{textAlign: 'center'}}>
                        LOGIN 
                    </Text>
                    <TextInput onFocus={(event) => {
                    }} style={{ backgroundColor: 'red' }} returnKeyType={'next'}
                        placeholder='Username' />
                    <TextInput onFocus={(event) => {
                    }} style={{ marginTop: 10, backgroundColor: 'blue' }} returnKeyType={'next'}
                        placeholder='PASS' />
                    </View>
                    
                </View>
            </KeyboardAwareScrollView>
        )
    }

}