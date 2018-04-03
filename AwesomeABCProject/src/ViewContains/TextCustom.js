import React, {Component} from 'react';
import {Text} from 'react-native';

export default class TextCustom extends Component {

    render() {
    	const {style, ...rest} = this.props;
        return (
            <Text style={[styles.text, style]} {...rest}>{this.props.children}</Text>
        );
    }
}
const styles = {
    text: {
        color: 'red',
        fontFamily: 'Arial'
    }
};