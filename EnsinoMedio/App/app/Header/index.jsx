import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.profileImage} source={require('./minhaImagem.jpeg')} />
      <Text style={styles.headerText}>Douglas Pierri Beccari</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center', // Alinha verticalmente ao centro
    backgroundColor: 'purple', // Cor de fundo do cabeçalho
    height: 150, // Altura do cabeçalho
    width: '100%', // Largura total da tela
    paddingVertical: 10, // Espaço interno vertical
    position: 'absolute', // Posicionamento absoluto
    top: 0, // Posiciona no topo
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Permite que o texto ocupe o espaço restante
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Imagem circular
  },
});

export default Header;
