import React from 'react';
import { StyleSheet, Image, View, Alert} from 'react-native';

import Texto from '../../../componentes/Texto'//componetes de exibição de texto
import BotaoAdd from '../../../componentes/BotaoAdd'

export default function Detalhes({nome, detalhes, logo, preco, botao}){
    return <View style={styles.produto}>
        <View style={styles.logotipo}>
            <Image source={logo} style={styles.logo} resizeMode='contain'/>
            <Texto style={styles.nome}>{nome}</Texto>
          </View>
          <Texto style={styles.descricao}>{detalhes}</Texto>
          <Texto style={styles.preco}>{preco}</Texto>
          <BotaoAdd textoBotao={botao} clickBotao={()=>{Alert.alert("Em breve!", "Estamos preparando uma nova função para você :) ")}}/>
        </View>
}

const styles = StyleSheet.create({
    produto: {
      paddingVertical: 8 ,
      paddingHorizontal: 12,
    },
    nome: {
      color: "#C7830D",
      fontWeight: "bold",
      fontSize: 26,
      paddingTop: 25,
      paddingLeft: 10,
    },
    descricao: {
      color:  "black",
      //fontWeight: "bold",
      fontSize: 18,
      padding:1,
    },
    preco: {
      color: "#C7830D",
      fontSize: 24,
      fontWeight: "bold",
    },
    logo: {
      width:100,
      height:100,
    },
    logotipo: {
      flexDirection: "row",
    }
});