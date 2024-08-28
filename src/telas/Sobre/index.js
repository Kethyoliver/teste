import React from "react";
import { Image, ScrollView } from 'react-native';
import styles from './estilos';
import Texto from '../../componentes/Texto';
import Loja from '../../../assets/fundo.jpg';
import { Video, ResizeMode } from 'expo-av'

export default function Index({ info }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (

        <ScrollView style={styles.container}>
            <Image source={info.logo} style={styles.logo} resizeMode='contain' />
            <Texto style={styles.textoSobre}>{info.texto_sobre}</Texto>
            <Image source={info.loja} style={styles.logo} resizeMode='contain' />

            <Video ref={video}
                style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)} />
        </ScrollView>
    )
}
