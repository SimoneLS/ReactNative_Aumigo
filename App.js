import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Header from "./scr/components/cabecalho";
import Btn from "./scr/components/botao";
import User from "./scr/components/usuario";
import Pets from "./scr/components/pets";
import SeusPets from "./dados/Pets";
import Aumigo from "./scr/components/aumigo";
import Adote from "./dados/Aumigo";

export default function App() {
  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
      <Header> </Header>

      <Btn
        Logo="cash"
        texto="Doe"
        cor="#00734b"

        Logo2="paw"
        texto2="Adote"
        cor2="#00734b"

        Logo3="book-outline"
        texto3="Info"
        cor3="#00734b"
      />
      <User> </User>

      <Text style={{color:'grey',
        marginLeft:15,
        fontSize:15,
        fontWeight:'bold'}}
        >Seus Pets </Text>

      <FlatList
        horizontal={true}
        data = {SeusPets}
        keyExtractor= {(item) => item.id}
        renderItem = { ({item}) => (
          <Pets
            titulo = {item.nome}
            imagem = {item.imagem}
          />
        )}
      />

      <Text style={{color:'grey',
        marginLeft:15,
        fontSize:15,
        fontWeight:'bold'}}
        >Adote um AuMIGO! </Text>

      <FlatList
        horizontal={true}
        data = {Adote}
        keyExtractor= {(item) => item.id}
        renderItem = { ({item}) => (
          <Aumigo
            titulo = {item.nome}
            imagem = {item.imagem}
            espaço = {item.espaço}
            idade = {item.idade}
            raça = {item.raça}
            temperamento = {item.temperamento}
            tamanho = {item.tamanho}
            castrado = {item.castrado}
            vacinado = {item.vacinado}
          />
        )}
      />


    </View>
  );
}
