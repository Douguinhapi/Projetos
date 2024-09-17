import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';


export default function App() {
  const [balance, setBalance] = useState(7320.92);
  const [amount, setAmount] = useState('');
  const [modalActive, setModalActive] = useState(false)


  const handleDeposit = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      setBalance(balance + value + value * 0.01);
      setAmount(''); // Limpa o campo após a operação
    }
    setModalActive(false)
  };

  const handleWithdraw = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      setBalance(balance - value - (balance - value) * 0.025);
      setAmount(''); // Limpa o campo após a operação
    }
    setModalActive(false)
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
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalActive}
        onRequestClose={() => (setModalActive(false))}
      >
        <View style={styles.outerView}>
          <View style={styles.modalView}>
            <Text style={{alignItems: 'center', justifyContent: 'center'}}>Tem certeza?</Text>
            <Text onPress={handleDeposit} style={{backgroundColor: 'red', color: 'white', fontSize: 15}}>Confirmar</Text>
            <Text style={{backgroundColor: 'red', color: 'white', fontSize: 15}}>Negar</Text>
            {/* <Pressable onPress={() => setModalActive(false)}>
              <Text style={{color: 'red'}}>Fechar modal</Text> 
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalActive(true)} style={{backgroundColor: 'red', padding: 16, borderRadius: 8, marginHorizontal: 450}}>
        <Text style={{color: 'white', fontSize: 16}}>Depositar</Text>
      </TouchableOpacity>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalActive}
        onRequestClose={() => (setModalActive(false))}
      >
        <View style={styles.outerView}>
          <View style={styles.modalView}>
            <Text style={{alignItems: 'center', justifyContent: 'center'}}>Tem certeza?</Text>
            <Text onPress={handleWithdraw} style={{backgroundColor: 'red', color: 'white', fontSize: 15}}>Confirmar</Text>
            <Text style={{backgroundColor: 'red', color: 'white', fontSize: 15}}>Negar</Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalActive(true)} style={{backgroundColor: 'red', padding: 16, borderRadius: 8, marginHorizontal: 450, marginTop: 10}}>
        <Text style={{color: 'white', fontSize: 16}}>Sacar</Text>
      </TouchableOpacity>
      {/* <View> */}
        <Link href="./index.jsx">
          <Text style={{backgroundColor: 'red', padding: 16, borderRadius: 8, marginHorizontal: 620, marginTop: 10, color: 'white'}}> Voltar </Text>
        </Link>
      {/* </View> */}
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
    gap: 10,
  },
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 35,
    width: 200,
    alignItems: 'center'
  }
});