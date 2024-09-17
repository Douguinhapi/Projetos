import { View, Text, StyleSheet, Image, } from 'react-native';
import Header from '../Header';
import { Link } from 'expo-router';

export default function () {

  return (
    <View>
      <Header/>
        <View style={styles.container}>
        <Text>nome: Douglas Pierri Beccari</Text>
        <Text>data nascimento: 03/03/2007</Text>
        <Text>cpf: 🤫</Text>
        <View>
          <Image style={styles.minhaFoto} source={require('./minhaImagem.jpeg')} />
          <View style={styles.botoes}>
            <Link href='./musicasFav'>
             <Text>Músicas Favoritas</Text>
            </Link>
            <Link href='exerciciosFav'>
              <Text>Exercícios Favoritos</Text>
          </Link>
          </View>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minhaFoto: {
    width: 150,
    height: 260,
    borderRadius: 100,
  },
});