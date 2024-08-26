import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [balance, setBalance] = useState(7320.92);
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      setBalance(balance + value + value * 0.01);
      setAmount(''); // Limpa o campo após a operação
    }
  };

  const handleWithdraw = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      setBalance(balance - value - (balance - value) * 0.025);
      setAmount(''); // Limpa o campo após a operação
    }
  };

  return (
    <View style={styles.container}>
      {/* Espaço para a imagem na parte superior */}
      <Image
        source={{ uri: 'https://specto.com.br/wp-content/uploads/2024/06/logo-specto-case-santander-01.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.balanceText}>Saldo: R$ {balance.toFixed(2)}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={styles.buttonContainer}>
        <Button title="Depositar" onPress={handleDeposit} color="red" />
        <Button title="Sacar" onPress={handleWithdraw} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 20,
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});