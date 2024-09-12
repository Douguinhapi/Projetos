import React from 'react';
import { Button, View } from 'react-native';
import { Link } from 'expo-router';

export default function App(){
  return (
    <View>
      <Link href="./Banco">
        <Button title=" Santander " onPress={() => {}} />
      </Link>
      <Link href="./Calculadora">
        <Button title=" Calculadora " onPress={() => {}} />
      </Link>
      <Link href="./SingUp">
        <Button title=" SingUp " onPress={() => {}} />
      </Link>
    </View>
  );
};
