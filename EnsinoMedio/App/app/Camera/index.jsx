import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [ladoCamera, setLadoCamera] = useState('back');

    if (!permissao) {
        return <View></View>;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Você precisa da permissão para utilizar a câmera</Text>
                <Button title="Pedir permissão" onPress={pedirPermissao} />
            </View>
        );
    }

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera === 'back' ? 'front' : 'back');
    };

    const tirarFoto = async () => {
        const novaFoto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setFoto(novaFoto);
        console.log(novaFoto);
    };

    const salvarFoto = async () => {
        const permissaoSalvar = await MediaLibrary.requestPermissionsAsync();
        if (permissaoSalvar.status === 'granted') {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
        } else {
            alert('Você precisa conceder permissão para salvar a foto.');
        }
    };

    const onBarcodeScanned = (data) => {
        Linking.openURL(data.raw);
    };

    return (
        <View style={styles.container}>
            {foto ? (
                <View>
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Image style={styles.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54324.png' }} />
                            <Button title="Descartar imagem" onPress={() => setFoto(null)} color="#FF9900" />
                        </View>
                        <View style={styles.button}>
                            <Image style={styles.icon} source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/426000-vector-salvar-icone-gratis-vetor.jpg' }} />
                            <Button title="Salvar foto" onPress={salvarFoto} color="#FF9900" />
                        </View>
                    </View>
                </View>
            ) : (
                <CameraView
                    style={styles.camera}
                    facing={ladoCamera}
                    ref={cameraRef}
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr'],
                    }}
                    onBarcodeScanned={onBarcodeScanned}
                >
                    <View style={styles.buttonContainer}>
                        <View style={styles.circleButton}>
                            <Button title="📷" onPress={tirarFoto} color="#FF9900" />
                        </View>
                        <View style={styles.circleButton}>
                            <Button title="🔄" onPress={inverterLadoCamera} color="#FF9900" />
                        </View>
                    </View>
                </CameraView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textopermissao: {
        textAlign: 'center',
        marginBottom: 20,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 30,
        width: '100%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF9900',
        padding: 10,
        borderRadius: 30,
        marginHorizontal: 10,
        elevation: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    circleButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#FF9900',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginHorizontal: 10,
    },
});