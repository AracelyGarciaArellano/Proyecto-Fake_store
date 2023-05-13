import React from 'react';
import { Text, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Nosotros from './StackNavigation1';
import Productos from '../Screens/Productos';
import Descuentos from '../Screens/Descuentos';
import Carrito from '../Screens/Carrito';
import Historial from '../Screens/Historial';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation1(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Nosotros" component={Nosotros} />
      <Drawer.Screen name="Productos" component={Productos} />
      <Drawer.Screen name="Descuentos" component={Descuentos} />
      <Drawer.Screen name="Carrito" component={Carrito} />
      <Drawer.Screen name="Historial" component={Historial} />
    </Drawer.Navigator>
  );
}
