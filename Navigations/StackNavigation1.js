import React, { useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'; //poner el arroba para que aparesca la opcion de agregar dependencia
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, ListItem, Avatar } from '@rneui/themed';
import Nosotros from '../Screens/Nosotros';
import Productos from '../Screens/Productos';
import Carrito from '../Screens/Carrito';
import InicioSesion from '../Screens/InicioSesion';
import Registro from '../Screens/Registro';
import Detalles from '../Screens/Detalles';
import Favoritos from '../Screens/Favoritos';
import BottomTabNavigation1 from './BottomTabNavigation1';
import DrawerNavigation1 from './DrawerNavigation1';
import { UsoContext } from '../Context/UsoContext';

const Stack = createStackNavigator();

export default function StackNavigation1() {
  return (
    <Stack.Navigator>
    <Stack.Screen
        name="Home"
        component={Nosotros}
        options={{ headerShown: false, headerTitle: 'Home' }}
      />
      <Stack.Screen
        name="Login"
        component={InicioSesion}
        options={{ headerShown: false, headerTitle: 'Login' }} 
      />
      <Stack.Screen
        name="Register"
        component={Registro}
        options={{ headerShown: false, headerTitle: 'Register' }}
      />
      <Stack.Screen
        name="Details"
        component={Detalles}
        options={{ headerShown: true, headerTitle: 'Details' }}
      />
      
    </Stack.Navigator>
  );
}