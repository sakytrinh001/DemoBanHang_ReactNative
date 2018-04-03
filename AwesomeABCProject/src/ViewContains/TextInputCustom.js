import React, { Component } from 'react';
import { View, Dimensions, TextInput } from 'react-native';
const { width, height } = Dimensions.get('window')

export default class TextCustom extends Component {

    render() {
        const { style, ...rest } = this.props;
        return (
            <View style={[styles.viewCustom, style]} {...rest}>
            </View>
        );
    }
}
const styles = {
    viewCustom: {
        height: 40,
        borderWidth: 0.5,
        width: width - 20,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    textInput: {
        marginLeft: 10, 
        marginRight: 10,
        height: 40,
        backgroundColor: 'white'
    }
};