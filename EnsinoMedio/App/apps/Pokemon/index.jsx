import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default Seletor = () => {
  const [pokemon, setPokemon] = useState('');
  const [listaPokemons, setListaPokemons] = useState([]);
  const [pokemonsIniciais, setPokemonsIniciais] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((response) => response.json())
      .then((dados) => setTipos(dados.results))
      .catch((error) => console.error('Erro ao buscar os tipos:', error));

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((dados) => {
        setListaPokemons(dados.results);
        setPokemonsIniciais(dados.results);
      })
      .catch((error) => console.error('Erro ao buscar os pokémons:', error));
  }, []);

  useEffect(() => {
    if (tipoSelecionado) {
      fetch(`https://pokeapi.co/api/v2/type/${tipoSelecionado}`)
        .then((response) => response.json())
        .then((dados) => {
          const pokemonsPorTipo = dados.pokemon.map((p) => p.pokemon.name);

          const pokemonsFiltrados = pokemonsIniciais.filter((pokemon) =>
            pokemonsPorTipo.includes(pokemon.name)
          );

          setListaPokemons(pokemonsFiltrados);
        })
        .catch((error) =>
          console.error('Erro ao buscar os pokémons por tipo:', error)
        );
    } else {
      setListaPokemons(pokemonsIniciais);
    }
  }, [tipoSelecionado, pokemonsIniciais]);

  const image = { uri: "https://tm.ibxk.com.br/2019/09/30/30091641838086.jpg?ims=1200x675" };

  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
      <View style={styles.container}>
      <Text style={styles.title}>Escolha o seu POKEMON (do pierri)</Text>
        <Picker
          selectedValue={tipoSelecionado}
          onValueChange={(itemValue) => setTipoSelecionado(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label='Selecione um Tipo' value='' />
          {tipos.map((tipo, index) => (
            <Picker.Item key={index} label={tipo.name} value={tipo.name} />
          ))}
        </Picker>

        <Picker
          selectedValue={pokemon}
          onValueChange={(itemValue) => setPokemon(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label='Selecione um Pokémon' value='' />
          {listaPokemons.map((item, index) => (
            <Picker.Item key={index} label={item.name} value={item.name} />
          ))}
        </Picker>

        {pokemon ? <Text style={styles.selectedText}>Você selecionou {pokemon}</Text> : ''}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 25,
  },
  picker: {
    width: '20%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    elevation: 2,
    marginBottom: 15,
  },
  pickerItem: {
    height: 50,
    fontSize: 18,
    color: '#333',
  },
  selectedText: {
    fontSize: 35,
    color: '#ffffff',
    marginTop: 20,
    fontWeight: 'bold',
  },
});