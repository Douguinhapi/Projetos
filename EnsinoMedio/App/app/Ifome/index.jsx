import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

const App = () => {
    const { cart, addToCart, clearCart } = useCart();

    const snacks = [
        { id: 1, name: 'Hambúrguer', price: 10 },
        { id: 2, name: 'Batata Frita', price: 5 },
        { id: 3, name: 'Refrigerante', price: 4 },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione seus Lanches</Text>
            {snacks.map((snack) => (
                <View key={snack.id} style={styles.snackContainer}>
                    <Text>{snack.name} - R$ {snack.price}</Text>
                    <Button style={styles.Button} title="Adicionar ao Carrinho" onPress={() => addToCart(snack)} />
                </View>
            ))}
            <Text style={styles.title}>Carrinho de Compras</Text>
            {cart.length === 0 ? (
                <Text>Seu carrinho está vazio</Text>
            ) : (
                cart.map((item, index) => (
                    <Text key={index}>{item.name} - R$ {item.price}</Text>
                ))
            )}
            <Button style={styles.Button} title="Limpar Carrinho" onPress={clearCart} />
        </View>
    );
};

const MainApp = () => (
    <CartProvider>
        <App />
    </CartProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    snackContainer: {
        marginBottom: 15,
    },
});

export default MainApp;