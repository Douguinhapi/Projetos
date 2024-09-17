import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.profileImage} source={require('./minhaImagem.jpeg')} />
        <Text style={styles.nameText}>Douglas Pierri Beccari</Text>
        <Text style={styles.infoText}>Data de Nascimento: 03/03/2007</Text>
        <Text style={styles.infoText}>CPF: 🤫</Text>

        <View style={styles.buttonsContainer}>
          <Link href="/SobreMim/musicasFav.jsx" style={styles.buttonLink}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Músicas Favoritas</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/exerciciosFav.jsx" style={styles.buttonLink}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Exercícios Favoritos</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Cor de fundo clara e suave
  },
  card: {
    width: '90%',
    maxWidth: 350,
    padding: 20,
    backgroundColor: '#ffffff', // Fundo branco para destacar o conteúdo
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Sombra no Android
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Imagem circular
    marginBottom: 15,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00796b', // Cor verde escuro para o nome
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#004d40', // Texto em verde escuro para contraste
    marginBottom: 8,
  },
  buttonsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonLink: {
    width: '100%', // Faz com que o Link ocupe toda a largura disponível
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00796b', // Cor verde escuro para botões
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 10, // Espaço entre os botões
    width: '100%', // Largura do botão
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o texto verticalmente
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
