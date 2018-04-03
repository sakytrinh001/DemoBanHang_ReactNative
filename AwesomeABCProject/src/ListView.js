import React, { Component } from 'react';
import { Image, ScrollView, Dimensions, Text, TouchableOpacity, View, StyleSheet, FlatList, Alert, RefreshControl } from 'react-native';
const { width, height } = Dimensions.get('window')
import { NavigationActions } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay'

export default class ForgotPass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
            itemCell: '',
            visible: false
        };
    }

    _keyExtractor(item, index) {
        return index;
    }

    componentWillMount() {
        this.setState({visible: true})
        this.getAPI()
    }

    GetItem(item) {
        this.props.navigation.navigate('ScrollViewTest', { object: item })
    }

    renderItem(item) {

        return (
            <TouchableOpacity style={styles.itemBlock} onPress={() => this.GetItem(item)}>
                <Image source={require('./imagesrc/GEmail.png')} style={styles.itemImage} />
                <View style={styles.itemMeta} onPress={this.GetItem.bind(this, item.title)}>
                    <Text style={styles.itemName}>{item.title}</Text>
                    <Text style={styles.itemLastMessage}>
                        {item.releaseYear}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onRefresh() {
        this.setState({
            refreshing: true
        })
        setTimeout(function () {
            this.setState({
                refreshing: false
            })
        }.bind(this), 1000)
    }

    renderSeparator() {
        return <View style={styles.separator} />
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={3}
                    keyExtractor={this._keyExtractor}
                    data={this.state.data}
                    renderItem={({ item }) => this.renderItem(item)}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                />
                <Spinner visible={this.state.visible} color={'black'} size={'small'} animation={'none'}/>
            </View>

        )

    }

    async getAPI() {
        try {
            let response = await fetch(
                'https://facebook.github.io/react-native/movies.json'
            );
            let responseJson = await response.json();
            this.setState({ data: responseJson.movies });
            this.setState({visible: false});
        } catch (error) {
            console.error(error)
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    itemBlock: {
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: 'white',
        marginTop: 12,
        borderRadius: 4,
        width: (width)/3 - 16,
        height: 100,
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 12
    },
    itemMeta: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'yellow',
    },
    itemName: {
        flex: 1,
        fontSize: 20,
    },
    itemLastMessage: {
        flex: 1,
        fontSize: 14,
        color: "#111",
    },
    separator: {
        height: 0.5,
        width: "90%",
        alignSelf: 'flex-end',
        backgroundColor: "#555"
    },
    header: {
        padding: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: '900'
    },
    itemText: {

    }


})
