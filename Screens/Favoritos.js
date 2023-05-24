import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Text,
  Button,
  Icon,
  ButtonGroup,
  ListItem,
  Avatar,
  Divider,
} from '@rneui/themed';
import { UsoContext } from '../Context/UsoContext';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

const Favoritos = ({ route, navigation }) => {
  const {
    selectedIndex,
    setSelectedIndex,
    mostrarTarjetas,
    funcionBotones,
    setProductDetalle,
    products,
    favoritos,
    enviarAFavoritos,
  } = useContext(UsoContext);

  useEffect(() => {
    enviarAFavoritos(navigation);
  }, [products]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Favs</Text>
        <Button
        onPress={() => navigation.navigate('Home')}
          icon={{
            name: 'home',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          buttonStyle={{
            backgroundColor: 'black',
            borderRadius: 50,
          }}
          containerStyle={{
            width: 50,
            marginLeft: 50,
            marginVertical: 15,
          }}
        />
      </View>
      <View>
        {favoritos && favoritos.length > 0 ? (
          favoritos
        ) : (
          <Text>No favorites</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.carButton}
        onPress={() => navigation.navigate('Products')}>
        <Text style={styles.carButtonText}>Keep buying</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Favoritos;

const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    marginTop: Constants.statusBarHeight,
  },
  carButton: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 17,
    borderRadius: 50,
    marginTop: 20,
  },
  carButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
