import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";
export default function Aumigo({ titulo, espaço, imagem, idade, raça, temperamento, tamanho, castrado, vacinado }) {
    return(
        <View>
        <TouchableOpacity style={estilo.containerAumigo}>
            
        <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
        />
        <Text style={estilo.titulo}>{titulo}</Text>
        <Text style={estilo.titulo2}>{espaço}</Text>
        <Text style={estilo.titulo2}>Raça: {raça}</Text>
        <Text style={estilo.titulo2}>Idade: {idade}</Text>
        <Text style={estilo.titulo2}>Temperamento: {temperamento}</Text>
        <Text style={estilo.titulo2}>Tamanho: {tamanho}</Text>
        <Text style={estilo.titulo2}>Castrado: {castrado}</Text>
        <Text style={estilo.titulo2}>Vacinado: {vacinado}</Text>
        </TouchableOpacity>
        </View>
    );
}
const estilo = StyleSheet.create({
    containerAumigo: {
        backgroundColor: "#40bc8e",
        marginTop: 20,
        padding: 15,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        width: 280,
        height: 550,
        marginBottom: 80,
        borderRadius: 20,
    },
    titulo: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: "center"
    },
    titulo2: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    images: {
        width: "70%",
        height: "40%",
        borderRadius: '10px',

    },
});