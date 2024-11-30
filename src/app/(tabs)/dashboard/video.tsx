import { Text, View } from "react-native";
import {Video} from 'expo-av';
import React, { useState } from "react";

export default function VideoTest () {

    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = useState({});
    const [statusSecoundVideo, setStatusSecoundVideo] = useState({});


    return (
        <View className="flex-1 justify-center items-center">
            <Video 
            ref={video}
            style={{flex: 1, alignSelf: 'stretch'}}
            source={{uri: 'https://youtu.be/G2rEfcBV5ro?si=euwSTMdRkA-vGLXO'}}
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={setStatus}
            />
        </View>
    )
}