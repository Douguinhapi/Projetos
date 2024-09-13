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
      {/* tete */}
    </View>
  );
};