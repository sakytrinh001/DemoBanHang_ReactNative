import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';

// import {Button, Modal} from './../native-starter-pro'

import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import TextCustom from './ViewContains/TextCustom'

const { width, height } = Dimensions.get('window')

export default class ForgotPass extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={styles.searchSection}>
                    <Image source={require('./imagesrc/GEmail.png')} style={styles.ImageStyle} />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Enter Your Email Here"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity style={styles.containerView} underlayColor='#fff'
                    onPress={() => this.props.navigation.dispatch(NavigationActions.back(), this.props.navigation.dispatch(NavigationActions.back()))}
                >
                    <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        BACK HOME
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerView} underlayColor='#fff'
                    onPress={() => this.props.navigation.navigate('ScrollViewTest')}
                >
                    <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        TEST SCROLL
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#68a0cf',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fff',
        width: 150,
        height: 40

    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },


})
