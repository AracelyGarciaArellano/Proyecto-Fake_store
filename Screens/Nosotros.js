import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const Nosotros = ({navigation}) => {
  return (
    <View>
    <Button
        title="Conoce nuestros Productos"
        onPress={() => navigation.navigate('Productos')}
      />
      <Button
        title="Inicia Sesion"
        onPress={() => navigation.navigate('InicioSesion')}
      /> 
    </View>
  );
}

export default Nosotros;

/* <Button
        title="Conoce nuestros Productos"
        onPress={() => navigation.navigate('Productos')}
      />
      <Button
        title="Inicia Sesion"
        onPress={() => navigation.navigate('InicioSesion')}
      /> */
