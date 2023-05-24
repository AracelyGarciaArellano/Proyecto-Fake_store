import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; //poner el arroba para que aparesca la opcion de agregar dependencia
import Nosotros from '../Screens/Nosotros';
import Productos from '../Screens/Productos';
import Carrito from '../Screens/Carrito';
import InicioSesion from '../Screens/InicioSesion';
import Registro from '../Screens/Registro';
import Detalles from '../Screens/Detalles';
import Favoritos from '../Screens/Favoritos';
import BottomTabNavigation1 from './BottomTabNavigation1';
import DrawerNavigation1 from './DrawerNavigation1';

const Stack = createStackNavigator();

export default function StackNavigation1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InicioSesion"
        component={InicioSesion}
        options={{ headerShown: false, headerTitle: 'InicioSesion' }} 
      />
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{ headerShown: false, headerTitle: 'Registro' }}
      />
      <Stack.Screen
        name="Nosotros"
        component={Nosotros}
        options={{ headerShown: false, headerTitle: 'Registro' }}
      />
      <Stack.Screen
        name="Detalles"
        component={Detalles}
        options={{ headerShown: true, headerTitle: 'Registro' }}
      />
      
    </Stack.Navigator>
  );
}

/*
 
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
*/