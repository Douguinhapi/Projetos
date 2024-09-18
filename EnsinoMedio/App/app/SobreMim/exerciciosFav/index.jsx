import { View, Text, StyleSheet, Image } from 'react-native';

export default function () {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>- Meus Exercícios Favoritos -</Text>
      <View style={styles.gifs}>
        <View style={styles.gifsFilho}>
          <Image style={styles.profileImage} source={require('./1.gif')} />
          <Text style={styles.textosGifs}>Remada Unilateral</Text>
        </View>
        <View style={styles.gifsFilho}>
          <Image style={styles.profileImage} source={require('./2.webp')} />
          <Text style={styles.textosGifs}>Agachamento Livre</Text>
        </View>
        <View style={styles.gifsFilho}>
          <Image style={styles.profileImage} source={require('./3.webp')} />
          <Text style={styles.textosGifs}>Rosca Bíceps</Text>
        </View>
        <View style={styles.gifsFilho}>
          <Image style={styles.profileImage} source={require('./4.webp')} />
          <Text style={styles.textosGifs}>Supino Inclinado</Text>
        </View>
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
    marginTop: 10,
  },
  profileImage: {
    borderColor: 'purple',
    borderWidth: 5,
    height: 200,
    width: 200,
  },
  gifs: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  gifsFilho: {
    flex: 1,
    flexDirection: 'column',
    padding: 52,
  },
  textosGifs: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
  }
});
