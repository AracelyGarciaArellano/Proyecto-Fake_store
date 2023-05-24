import React, { useEffect, useContext, useState } from 'react';
import {  View, StyleSheet,TouchableOpacity  } from 'react-native';
import { Text, Button, Icon, ButtonGroup,ListItem, Avatar,Divider} from '@rneui/themed';
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
  
  //const {nombre}=route.params; //esto es enviado desde Nosotros ejemplo de route
  return (
   
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, alignSelf: 'center',alignItems: 'center', justifyContent: 'center', }}>Favs</Text>
      <View>
          {favoritos && favoritos.length > 0 ? (
            favoritos
          ) : (
            <Text>No hay favoritos </Text>
          )}
        </View>
      <TouchableOpacity
        style={styles.carButton}
        onPress={() => navigation.navigate('Productos')}
      >
        <Text style={styles.carButtonText}>Seguir comprando</Text>
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
});