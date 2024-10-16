import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('items');
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const addItem = async () => {
    if (text) {
      const newItems = [...items, text];
      setItems(newItems);
      setText('');

      try {
        await AsyncStorage.setItem('items', JSON.stringify(newItems));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removeItem = async (itemToRemove) => {
    const newItems = items.filter(item => item !== itemToRemove);
    setItems(newItems);

    try {
      await AsyncStorage.setItem('items', JSON.stringify(newItems));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um texto"
        value={text}
        onChangeText={setText}
      />
      <Button title="Adicionar" onPress={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item}</Text>
            <TouchableOpacity onPress={() => removeItem(item)}>
              <Text style={styles.removeButton}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    fontSize: 18,
  },
  removeButton: {
    color: 'red',
    fontSize: 16,
  },
});

export default App;
