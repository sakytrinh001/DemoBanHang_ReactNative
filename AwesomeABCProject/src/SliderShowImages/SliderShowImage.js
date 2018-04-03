import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions
} from 'react-native';
import Slideshow from 'react-native-slideshow';
import MapView from 'react-native-maps';


const { width, height } = Dimensions.get('window')

export default class SliderShowImage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'https://www.alveo-slovakia.com/photo/147695/image-qygjxz.jpg',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'https://www.alveo-slovakia.com/photo/147704/how-to-crop-image-with-jquery-and-php-phpgangcom.jpg',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'https://www.alveo-slovakia.com/photo/147691/free-photo-image-editing-ebv-unleashed-free-image-on-pixabay-image-editing-ebv-unleashed-image-editing-program.jpg',
        },
      ],
      mapRegion: null,
      lastLat: null,
      lastLong: null,
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position == this.state.dataSource.length - 1 ? 0 : this.state.position + 1
        });
      }, 2000)
    });

    this.watchID = navigator.geolocation.watchPosition((position) =>{
      let region= {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
      this._map.animateToRegion(region, 400)
    })

  }

  onRegionChange(region, lastLat, lastLong){
     this.setState({
       mapRegion: region,
       lastLat: lastLat || this.state.lastLat,
       lastLong: lastLong || this.state.lastLong
     })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={styles.container}>
        <Slideshow style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          height={200} />
        <View style={{ flex: 1, position: 'absolute'}}>
          <MapView style={{ flex: 1 }}
            ref={component => {this._map = component;}}
            region={this.state.region}
            showsUserLocation={true}
            followsUserLocation={false}
            onRegionChange={this.onRegionChange.bind(this)}
            
          >
          <MapView.Marker
            coordinate={{
              latitude: (this.state.lastLat + 0.00050),
              longitude: (this.state.lastLong + 0.00050),
            }}>
            <View>
              <Text style={{color: '#000'}}>
                { this.state.lastLong } / { this.state.lastLat }
              </Text>
            </View>
          </MapView.Marker>
          
          </ MapView>
          <View style={{ backgroundColor: 'gray', height: 40, width: 40, justifyContent: 'flex-start', }}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }

})