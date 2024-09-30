import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCart } from './CartContext';

const SnackSelectionScreen = ({ navigation }) => {
    const { addToCart } = useCart();

    const snacks = [
        { id: 1, name: 'Hambúrguer', price: 10 },
        { id: 2, name: 'Batata Frita', price: 5 },
        { id: 3, name: 'Refrigerante', price: 4 },
    ];

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Selecione seus Lanches</Text>
            {snacks.map((snack) => (
                <View key={snack.id} style={{ marginBottom: 10 }}>
                    <Text>{snack.name} - R$ {snack.price}</Text>
                    <Button title="Adicionar ao Carrinho" onPress={() => addToCart(snack)} />
                </View>
            ))}
            <Button title="Ir para Carrinho" onPress={() => navigation.navigate('Cart')} />
        </View>
    );
};

export default SnackSelectionScreen;
