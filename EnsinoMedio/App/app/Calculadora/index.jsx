import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CalculatorApp() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Erro', 'Por favor, insira números válidos.');
      return;
    }

    let calcResult = 0;
    switch (operation) {
      case 'add':
        calcResult = num1 + num2;
        break;
      case 'subtract':
        calcResult = num1 - num2;
        break;
      case 'multiply':
        calcResult = num1 * num2;
        break;
      case 'divide':
        calcResult = num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
        break;
    }
    setResult(calcResult.toString());
  };

  const clearInputs = () => {
    setValue1('');
    setValue2('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Simples</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={value1}
        onChangeText={setValue1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={value2}
        onChangeText={setValue2}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('add')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('subtract')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('multiply')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('divide')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>
        Resultado: {result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  button: {
    width: '22%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },

});