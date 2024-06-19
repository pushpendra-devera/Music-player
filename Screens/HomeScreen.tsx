import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios';
import TrackPlayer from 'react-native-track-player';



const apicalling = async () => {
    console.log("api calling 0");
    var track1 = {
        url: 'http://example.com/avaritia.mp3', // Load media from the network
        title: 'Avaritia',
        artist: 'deadmau5',
        album: 'while(1<2)',
        genre: 'Progressive House, Electro House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        artwork: 'http://example.com/cover.png', // Load artwork from the network
        duration: 402 // Duration in seconds
    };
    
    const track2 = {
        url: 'http://example.com/avaritia.mp3', // Load media from the network
        title: 'Coelacanth I',
        artist: 'deadmau5',
        artwork: 'http://example.com/cover.png', // Load artwork from the network
        duration: 166
    };
    
    const track3 = {
        url: 'http://example.com/avaritia.mp3', // Load media from the network
        title: 'Ice Age',
        artist: 'deadmau5',
         // Load artwork from the file system:
         artwork: 'http://example.com/cover.png', // Load artwork from the network
         duration: 411
    };
    
    // You can then [add](https://rntp.dev/docs/api/functions/queue#addtracks-insertbeforeindex) the items to the queue
    await TrackPlayer.add([track1, track2, track3]);
}
export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ color: 'black' }}>HomeScreen Welcomes you </Text>
                <Button title='list' onPress={apicalling} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})