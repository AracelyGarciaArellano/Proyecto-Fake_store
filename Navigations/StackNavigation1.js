import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; //poner el arroba para que aparesca la opcion de agregar dependencia
import Nosotros from '../Screens/Nosotros';
import Productos from '../Screens/Productos';
import Carrito from '../Screens/Carrito';
import Descuentos from '../Screens/Descuentos';
import Historial from '../Screens/Historial';
import InicioSesion from '../Screens/InicioSesion';
import Registro from '../Screens/Registro';
import Detalles from '../Screens/Detalles';
import Favoritos from '../Screens/Favoritos';
import Header1 from '../Screens/Header1';

const Stack = createStackNavigator();

export default function StackNavigation1() {
  return (
    <Stack.Navigator>
    

      <Stack.Screen
        name="Nosotros"
        component={Nosotros}
        options={{ headerShown: false, headerTitle: 'Nosotros' }}
      />

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
        name="Carrito"
        component={Carrito}
        options={{ headerShown: true, headerTitle: 'Carrito' }}
      />

      <Stack.Screen
        name="Historial"
        component={Historial}
        options={{ headerShown: true, headerTitle: 'Historial' }}
      />

      <Stack.Screen
        name="InicioSesion"
        component={InicioSesion}
        options={{ headerShown: true, headerTitle: 'InicioSesion' }}
      />

      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{ headerShown: true, headerTitle: 'Registro' }}
      />

      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ headerShown: true, headerTitle: 'Favoritos' }}
      />
    </Stack.Navigator>
  );
}
