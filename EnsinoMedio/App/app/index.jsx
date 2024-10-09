import React from 'react';
import { Button, View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
          <Link href="./Camera" style={styles.link}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 360,
  },
  link: {
    width: '50%',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});