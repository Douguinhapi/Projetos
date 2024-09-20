import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';

// Importar imagens
import cidade2000 from './1.png';
import doceVeneno from './2.png';
import tudoDeveSer from './3.png';
import meuMundoBarro from './4.png';
import leal from './5.png';

const DATA = [
  {
    id: '1',
    title: 'MatueMatuê - Cidade 2000',
    url: 'https://www.youtube.com/watch?v=SkgNDF9k674&list=RDSkgNDF9k674&start_radio=1',
    image: cidade2000,
  },
  {
    id: '2',
    title: 'Costa Gold - Doce Veneno',
    url: 'https://www.youtube.com/watch?v=xxd86eELU9g&list=RDxxd86eELU9g&start_radio=1',
    image: doceVeneno,
  },
  {
    id: '3',
    title: 'Charlie Brown Jr - como tudo deve ser',
    url: 'https://www.youtube.com/watch?v=d4iGRWvlfMY&list=RDMMd4iGRWvlfMY&start_radio=1',
    image: tudoDeveSer,
  },
  {
    id: '4',
    title: 'O Rappa - Meu Mundo É o Barro',
    url: 'https://www.youtube.com/watch?v=5BfPl05zvk4&list=RD5BfPl05zvk4&start_radio=1',
    image: meuMundoBarro,
  },
  {
    id: '5',
    title: 'Djonga - Leal',
    url: 'https://www.youtube.com/watch?v=Wg_8saahAAA',
    image: leal,
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.touchable}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.videoTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Músicas Favoritas</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  touchable: {
    alignItems: 'center', // Centraliza o conteúdo do TouchableOpacity
  },
  image: {
    width: 100, // Ajuste conforme necessário
    height: 100, // Ajuste conforme necessário
    borderRadius: 5,
    marginBottom: 10,
  },
  videoTitle: {
    fontSize: 18,
    color: 'purple',
  },
});

export default App;
