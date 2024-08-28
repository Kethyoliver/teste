import React from 'react';

import { StyleSheet, Image, Dimensions, StatusBar} from 'react-native';
import Header from '../../../../assets/Salted Caramel.jpg'
import Texto from '../../../componentes/Texto' //componetes de exibição de texto../../componentes/Texto.js

//Captura o tamanho da teal que está rodando o app

const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return<>
    <StatusBar/>
      <Image source={Header} style={styles.topo}/>
      <Texto style={styles.titulo}>{titulo}</Texto>
        </>
}

const styles = StyleSheet.create({
    topo: {
      width:"100%",
      height: 600 / 600 * width,
    },
    titulo: {
      width:"100%",
      position: "absolute",
      textAlign: "right",
      fontSize: 25,
      color: "white", 
      padding: 20,
      fontWeight: "bold",
    }
});