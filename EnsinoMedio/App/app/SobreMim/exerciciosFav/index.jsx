import { View, Text, StyleSheet, Image } from 'react-native';

export default function () {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>- Meus Exercícios Favoritos -</Text>
      <View style={styles.gifs}>
        <Image style={styles.profileImage} source={require('./1.gif')} />
        <Text>Remada Unilateral</Text>
        <Image style={styles.profileImage} source={require('./2.webp')} />
        <Text>Agachamento Livre</Text>
        <Image style={styles.profileImage} source={require('./3.webp')} />
        <Text>Rosca Bíceps</Text>
        <Image style={styles.profileImage} source={require('./4.webp')} />
        <Text>Supino Inclinado</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinha o conteúdo no topo
    alignItems: 'center',
    backgroundColor: 'white', // Cor de fundo clara e suave
  },
  title: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 48,
  },
  profileImage: {
    width: 100,
  }
});
