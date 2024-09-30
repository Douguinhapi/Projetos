import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCart } from './CartContext';

const CartScreen = () => {
    const { cart, clearCart } = useCart();

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Carrinho de Compras</Text>
            {cart.length === 0 ? (
                <Text>Seu carrinho está vazio</Text>
            ) : (
                cart.map((item, index) => (
                    <Text key={index}>{item.name} - R$ {item.price}</Text>
                ))
            )}
            <Button title="Limpar Carrinho" onPress={clearCart} />
        </View>
    );
};

export default CartScreen;
