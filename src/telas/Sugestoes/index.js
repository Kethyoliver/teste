import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import estilos from './estilo'; 

export default function Sugestoes() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder='Digite sua sugestão'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }}
            />
            <TextInput
                placeholder='Telefone'
                keyboardType='numeric'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }}
            />

            <TouchableOpacity
                style={estilos.botao}
                onPress={() => Alert.alert(" botão foi clicado.")}>
                <Text style={estilos.textoBotao}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}
