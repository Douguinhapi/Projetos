import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const App = () => {
  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const loadMemories = async () => {
      const storedMemories = await AsyncStorage.getItem('memories');
      if (storedMemories) {
        setMemories(JSON.parse(storedMemories));
      }
    };

    loadMemories();
  }, []);

  const addMemory = async () => {
    const memory = { text: newMemory, image: imageUri };
    const updatedMemories = [...memories, memory];
    setMemories(updatedMemories);
    await AsyncStorage.setItem('memories', JSON.stringify(updatedMemories));
    setNewMemory('');
    setImageUri(null);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const result = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(result.granted);
    setCameraVisible(true);
  };

  const capturePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setPhoto(photo.uri);
      setImageUri(photo.uri);
      setCameraVisible(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Listagem de memórias */}
      <FlatList
        data={memories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>{item.text}</Text>
            {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />}
          </View>
        )}
      />
      
      {/* Tela de adição de memórias */}
      <TextInput
        placeholder="Digite sua memória"
        value={newMemory}
        onChangeText={setNewMemory}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, marginBottom: 10 }} />}
      <Button title="Escolher da Galeria" onPress={pickImage} />
      <Button title="Tirar Foto" onPress={takePhoto} />
      <Button title="Adicionar Memória" onPress={addMemory} />
      
      {/* Camera View */}
      {cameraVisible && cameraPermission && (
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={(ref) => (cameraRef = ref)}>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 36 }}>
            <Button title="Capturar" onPress={capturePhoto} />
          </View>
        </Camera>
      )}
    </View>
  );
};

export default App;