import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isRearCamera, setIsRearCamera] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [qrCodeData, setQrCodeData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
      const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
      if (mediaLibraryStatus.status !== 'granted') {
        Alert.alert('Permissão para acessar a galeria é necessária!');
      }
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photoData = await cameraRef.takePictureAsync();
      setPhoto(photoData);
    }
  };

  const savePicture = async () => {
    if (photo) {
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      Alert.alert('Foto salva na galeria!');
      setPhoto(null);
    }
  };

  const discardPicture = () => {
    setPhoto(null);
  };

  const switchCamera = () => {
    setIsRearCamera((prev) => !prev);
  };

  const handleBarCodeScanned = ({ data }) => {
    setQrCodeData(data);
    setScanning(false);
    Alert.alert('QR Code escaneado', data);
  };

  const startScanning = () => {
    setScanning(true);
  };

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanning ? (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <Camera
          style={styles.camera}
          type={isRearCamera ? Camera.Constants.Type.back : Camera.Constants.Type.front}
          ref={(ref) => setCameraRef(ref)}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Tirar Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={switchCamera}>
              <Text style={styles.text}>Trocar Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={startScanning}>
              <Text style={styles.text}>Escanear QR Code</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      {photo && (
        <View style={styles.photoContainer}>
          <Image source={{ uri: photo.uri }} style={styles.preview} />
          <TouchableOpacity style={styles.button} onPress={savePicture}>
            <Text style={styles.text}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={discardPicture}>
            <Text style={styles.text}>Descartar</Text>
          </TouchableOpacity>
        </View>
      )}
      {qrCodeData ? (
        <Text style={styles.qrCodeText}>QR Code escaneado: {qrCodeData}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  photoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: 300,
    height: 400,
    marginBottom: 10,
    borderRadius: 10,
  },
  qrCodeText: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});