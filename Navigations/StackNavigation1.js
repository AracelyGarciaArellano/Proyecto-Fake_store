import React, { useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'; //poner el arroba para que aparesca la opcion de agregar dependencia
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, ListItem, Avatar } from '@rneui/themed';
import Nosotros from '../Screens/Nosotros';
import Productos from '../Screens/Productos';
import Carrito from '../Screens/Carrito';
import Descuentos from '../Screens/Descuentos';
import Historial from '../Screens/Historial';
import Detalles from '../Screens/Detalles';
import Favoritos from '../Screens/Favoritos';
import Header1 from '../Screens/Header1';
import { UsoContext } from '../Context/UsoContext';

const Stack = createStackNavigator();

export default function StackNavigation1() {
  const { eliminarDelCarrito } = useContext(UsoContext);
  return (
    <Stack.Navigator>
    

     

      <Stack.Screen
        name="Productos"
        component={Productos}
        options={{ headerShown: true, headerTitle: 'Productos' }}
      />

      <Stack.Screen
        name="Detalles"
        component={Detalles}
        options={{ headerShown: true, headerTitle: 'Detalles' }}
      />

      <Stack.Screen
        name="Descuentos"
        component={Descuentos}
        options={({ route }) => ({ title: route.params.nombre })}
      />
       <Stack.Screen
        name="Nosotros"
        component={Nosotros}
        options={{ headerShown: false, headerTitle: 'Nosotros' }}
      />

      <Stack.Screen
      name="Carrito"
      component={Carrito}
      options={({ navigation }) => ({
        headerShown: true,
        headerTitle: 'Carrito',
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => eliminarDelCarrito(productDetalle.id)}
          >
        <Text>Eliminar</Text>
      </TouchableOpacity>
    ),
  })}
/>

      <Stack.Screen
        name="Historial"
        component={Historial}
        options={{ headerShown: true, headerTitle: 'Historial' }}
      />

      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ headerShown: true, headerTitle: 'Favoritos' }}
      />
    </Stack.Navigator>
  );
}