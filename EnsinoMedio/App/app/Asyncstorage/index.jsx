import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';



const getStoredMemories = async () => {
    try {
        const value = await AsyncStorage.getItem('lista_memorias')
    }
}

const TelaViagens = () => {
    const [memorias, setMemorias] = useState([])
}

const styles = StyleSheet.create({

});



useEffect(() => {
    let result = getStoredMemories()
    if (result){
        setMemorias(JSON.parse(result))
    }
}, [])

//

    return (
        <View style={styles.container}>
            <Header title="Memorias" voltaPara="/memorias" /> {/* trocar esse local que está */}
            <Link href='/memorias/'>
            </Link>
        </View>
    );
};