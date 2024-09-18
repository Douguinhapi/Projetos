import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Item 1',
    image: 'https://via.placeholder.com/150', // Substitua pelo link da sua imagem
  },
  {
    id: '2',
    title: 'Item 2',
    image: 'https://via.placeholder.com/150', // Substitua pelo link da sua imagem
  },
  {
    id: '3',
    title: 'Item 3',
    image: 'https://via.placeholder.com/150', // Substitua pelo link da sua imagem
  },
  // Adicione mais itens conforme necessário
];

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} image={item.image} />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default App;
