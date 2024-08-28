import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Texto from './Texto' //componetes de exibição de texto


export default function BotaoAdd({textoBotao, clickBotao}){
    return <TouchableOpacity style={styles.botao} onPress={clickBotao}>
            <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
          </TouchableOpacity>
}

const styles = StyleSheet.create({
    botao: {
      marginTop: 12,
      backgroundColor:"#F8D2C9",
      paddingVertical: 15,
      borderRadius: 20,
    },
    botaoTexto: {
      textAlign: "center",
      color:"#C7830D",
      fontSize: 19,
      lineHeight: 28,
      fontWeight:"bold",
    },
});