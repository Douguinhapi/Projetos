// App.js
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Tela de Abertura
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navega para a tela principal após 3 segundos
    const timer = setTimeout(() => {
      navigation.replace('Main'); // Navega para a tela principal
    }, 3000); // 3000ms = 3 segundos

    // Limpa o timeout se o componente for desmontado
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#FF7E5F', '#FFB88C']} // Cores do degradê
      style={styles.container}
    >
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pelo caminho para sua logo
        style={styles.logo}
      />
    </LinearGradient>
  );
};

// Tela Principal
const MainScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Tela Principal</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} // Oculta o cabeçalho para a tela de abertura
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
  },
});
