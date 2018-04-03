import React, { Component } from 'react';
import { View, Dimensions, TextInput, Text, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get('window')
const icBack = require('../imagesrc/GBack.png');
export default class HeaderView extends Component {

    renderIconLeft() {
        const iconLeftStyle = this.props.iconLeftStyle || {};
        if (this.props.iconLeft) {
            return (
                <Image source={this.props.iconLeft} style={[styles.iconLeft, iconLeftStyle]} resizeMode={'stretch'} />
            );
        } else {
            return null;
        }
    }

    renderIconRight() {
        const iconRightStyle = this.props.iconRightStyle || {};
        if (this.props.iconRight) {
            return (
                <Image source={this.props.iconRight} style={[styles.iconLeft, iconRightStyle]} />
            );
        } else {
            return null;
        }
    }

    render() {
        const { style, ...rest } = this.props;
        return (
            <View style={styles.viewCustomContains}>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end', marginLeft: 10, marginBottom: 12 }} >
                    <TouchableOpacity onPress={() => this.onPressLeft()}>
                        <View style={{ width: 24, height: 24 }}>{this.renderIconLeft()}</View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 10 }} >
                    <Text style={{ fontSize: 22, color: '#fff' }}> {this.props.titleHeader} </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 10, marginTop: 5, marginBottom: 12 }} >
                    <TouchableOpacity onPress={() => this.onPressRight()}>
                        <View style={{ width: 24, height: 24 }}>{this.renderIconRight()}</View>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
    onPressLeft() {
        if (this.props.onPressLeft) {
            this.props.onPressLeft();
        }
    }

    onPressRight() {
        if (this.props.onPressRight) {
            this.props.onPressRight();
        }
    }
}
const styles = {
    viewCustom: {
        flex: 1,
        height: 20,
        width,
        backgroundColor: 'blue'
    },
    viewCustomContains: {
        height: 64,
        width,
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    iconLeft: {
        height: 24,
        width: 24,
    }
};