import React, { Component } from 'react';
import { View, Dimensions, TextInput, Text, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get('window')
import HeaderView from '../ViewContains/HeaderView'
import TabbarTopBottom from '../Tabbar/TabbarTopBottom'

export default class ViewScreenTabbar extends Component {
    render() {
        const { style, ...rest } = this.props;
        return (
            <View style={styles.container}>
                <HeaderView titleHeader={'TEXT'}/>
                <TabbarTopBottom/>
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
      }
};