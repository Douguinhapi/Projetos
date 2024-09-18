import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default function () {

  return (
      <View style={styles.container}>
        <Text>Qualquer coisa</Text>
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
});
