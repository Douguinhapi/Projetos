import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Header from '../Header';

export default function () {
  const image = { uri: "https://tm.ibxk.com.br/2019/09/30/30091641838086.jpg?ims=1200x675" };

  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
    <Header style={styles.header}/>
      <View style={styles.container}>
        <Text>Douglas Pierri Beccari</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
});