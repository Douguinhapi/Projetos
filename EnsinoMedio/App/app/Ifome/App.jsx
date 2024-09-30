import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './CartContext';
import SnackSelectionScreen from './SnackSelectionScreen';
import CartScreen from './CartScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Snacks">
                    <Stack.Screen name="Snacks" component={SnackSelectionScreen} />
                    <Stack.Screen name="Cart" component={CartScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
};

export default App;
