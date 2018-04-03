import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Alert,
    Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';


const { width, height } = Dimensions.get('window')
const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyByG53Wx7s43ww-IB92ll9NsS7-FBXw4AU';

export default class MapViewScreen extends Component {
    //10.765933, 106.672141
    constructor(props) {
        super(props)
        this.state = {
            mapRegion: null,
            lastLat: null,
            lastLong: null
        }
    }


    componentWillMount() {

        this.watchId = navigator.geolocation.watchPosition((position) => {
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
            }
            this.onRegionChange(region, region.latitude, region.longitude);
            this._map.animateToRegion(region, 100);
        })

    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId)
    }

    onRegionChange(region, lastLat, lastLong) {
        this.setState({
            mapRegion: region,
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
        })
    }

    render() {
        return (
            <View style={{  position: 'absolute' }}>
                <MapView style={styles.containsMap}
                    ref={component => { this._map = component; }}
                region={this.state.region}
                showsUserLocation={true}
                followsUserLocation={true}
                onRegionChange={this.onRegionChange.bind(this)}
                >
                    {/* <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                    /> */}
                </MapView>
                <View style={{ backgroundColor: 'gray', height: 40, width: 40, }}>
                </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    containsMap: {
        flex: 1,
        width,
        height
    }

})