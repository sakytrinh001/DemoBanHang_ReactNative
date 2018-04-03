import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import MainScreen from '../MainScreen'
import LoginScreen from '../LoginScreen'
import SliderShowImage from '../SliderShowImages/SliderShowImage'
import MapViewScreen from '../MapView/MapViewScreen'
import ForgotScreen from '../ForgotPass'
import ViewTest from '../ViewTest'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <ViewTest />;
const SecondRoute = () => <LoginScreen />;
const ThirdRoute = () => <SliderShowImage/>;
const FourthRoute = () => <MapViewScreen/>;


export default class TabbarCustom extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
      { key: 'fourth', title: 'Fourth' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  
  },
});