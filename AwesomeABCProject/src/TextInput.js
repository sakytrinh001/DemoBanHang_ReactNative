import React, { Component } from 'react';
import { TextInput as RNTextInput } from 'react-native';

export default class TextInput extends Component {
    render() {
        const { props } = this;

        return (
            <RNTextInput
                {...props}
                ref={(input) => props.inputRef && props.inputRef(input)}
            />
        );
    }
}