import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <Link href="./Banco" style={styles.link}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Santander</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./Calculadora" style={styles.link}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Calculadora</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./SingUp" style={styles.link}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SingUp</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./Pokemon" style={styles.link}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pokemon</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./SobreMim" style={styles.link}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sobre Mim</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./Ifome" style={styles.link}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ifome</Text>
          </TouchableOpacity>
        </Link>
        <Link href="./Galeria" style={styles.link}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Galeria</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinha o conteúdo no topo
    alignItems: 'center',
    backgroundColor: 'white', // Cor de fundo clara e suave
  },
  buttonContainer: {
    marginTop: 220,
    width: '50%', // Largura do container dos botões
    alignItems: 'center',
  },
  link: {
    width: '100%', // Faz com que o Link ocupe toda a largura disponível
  },
  button: {
    backgroundColor: 'purple', // Cor verde escuro para os botões
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 25, // Espaço entre os botões
    width: '100%', // Largura do botão
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});