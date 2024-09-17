import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Douglas Pierri Beccari</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, // Altura do cabeçalho
    width: '100%', // Largura total da tela
    position: 'absolute', // Posicionamento absoluto
    top: 0, // Posicionar no topo
    left: 0, // Alinhar à esquerda
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;