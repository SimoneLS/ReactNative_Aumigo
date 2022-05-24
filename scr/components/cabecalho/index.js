import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


export default function Cabecalho(){
return(
    
    <View style={estilo.header}>
        <Image
        style={estilo.thumbnail}
        source={require('../../imagens/banner.jpg')}
         />
    </View>

);
}
const estilo = StyleSheet.create({
    header:{
        width: '100%',
        height: 100,
        justifyContent:'space-between',
        marginBottom:10

    },
      thumbnail: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
      } 
})