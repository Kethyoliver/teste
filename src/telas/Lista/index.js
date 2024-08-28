import React from "react";
import { Image, ScrollView} from 'react-native';
import styles from './estilo';
import Texto from '../../componentes/Texto';

export default function Index({info}){
    return <ScrollView style={styles.container}>
        <Image source={info.logo} style={styles.logo} resizeMode='contain'/>
        <Texto style={styles.textoSobre}>{info.texto_sobre}</Texto>
    </ScrollView>
}