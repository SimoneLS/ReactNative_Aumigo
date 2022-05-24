import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


export default function Cabecalho(){
return(
    
    <View style={estilo.header}>
        <Ionicons name="" size={28} color="white" />
        <Image
        style={estilo.logo}
        source={require('../../imagens/AUMIGO.png')}
      />
        <Ionicons name="menu" size={30} color="white" />
    </View>

);
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#40bc8e',
        borderRadius:2,
        marginTop:8,
        width:'99,9%',
        height: '12%',
        padding:2,
        margin:2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10

    },
    Texto:{
        color:'white',
        marginLeft:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    logo:{
         width: '45%',
         height: '35%',
        }
})