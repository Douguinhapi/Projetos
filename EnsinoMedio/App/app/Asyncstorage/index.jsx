import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('my-key', value);
    } catch (e) {
        // saving error
    }
};

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('my-key');
        if (value !== null) {
            // value previously stored
        }
    } catch (e) {
        // error reading value
    }

// 

    return (
        <View style={styles.container}>
            <h1>Teste</h1>
        </View>
    );
};


const styles = StyleSheet.create({

});