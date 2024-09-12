import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Link href="./Banco">
          <Button title="Santander" onPress={() => { }} />
        </Link>
        <Link href="./Calculadora">
          <Button title="Calculadora" onPress={() => { }} />
        </Link>
        <Link href="./SingUp">
          <Button title="SingUp" onPress={() => { }} />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column', // Coluna para empilhar botões verticalmente
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10, // Espaço entre os botões (opcional)
  },
});
