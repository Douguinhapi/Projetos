import {useState, useRef} from "react";
import {View, StyleSheet, Text, Image, Button} from "react-native";
import {CameraView, useCameraPermissions} from "expo-camera";

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRaf = useRef(null)

    if(!permissao){
        return <View></View>
    }

    if(!permissao.granted){
        return(
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Você autoriza o app usar a sua câmera</Text>
                <Button
                title="pedir permissão"
                onpress={pedirPermissao}
                />
            </View>
        )
    }
    const tirarFoto = async () => {
        const foto = await cameraRaf.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        setFoto(foto)
        console.log(foto)
    }

    return(
        <CameraView style={styles.camera} facing={'back'}>
            <View style={styles.buttonConteiner}>
                <Button title="Tirar foto" onPress={tirarFoto}/>
            </View>
        </CameraView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    textopermissao:{
        textAlign: 'center'
    },
    camera:{
        flex: 1,
    }
})