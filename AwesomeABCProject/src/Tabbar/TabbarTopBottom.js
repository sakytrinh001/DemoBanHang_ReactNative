import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import ForgotPass from '../ForgotPass'
import TabbarCustom from '../Tabbar/TabbarCustom'

export default TabNavigator(
  {
    ForgotPass: { screen: ForgotPass,
      navigationOptions: {
      title: 'Mat khau',
    }},
    TabbarCustom: { screen: TabbarCustom,
      navigationOptions: {
      title: 'Tabbar',
    } },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'ForgotPass') {
          iconName = require('../imagesrc/GBack.png');
        } else if (routeName === 'TabbarCustom') {
          iconName = require('../imagesrc/GEmail.png');
        }
        return <Image source={iconName} style={{height: 20, width: 20}} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: 'red'
      }
    },
    tabBarComponent: TabBarBottom,//TabBarBottom
    tabBarPosition: 'bottom',//bottom
    animationEnabled: true,
    swipeEnabled: true,
  }
);