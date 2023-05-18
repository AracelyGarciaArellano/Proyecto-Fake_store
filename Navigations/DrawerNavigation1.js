import React from 'react';
import { Text, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Nosotros from './StackNavigation1';
import Productos from '../Screens/Productos';
import Favoritos from '../Screens/Favoritos';
import Carrito from '../Screens/Carrito';
import InicioSesion from '../Screens/InicioSesion';
import Registro from '../Screens/Registro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from '@rneui/themed';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation1() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      screenOptions={{
        //drawerContentOptions
        drawerStyle: {
          backgroundColor: '#ffff',
          width: '80%',
        },
        drawerActiveTintColor: '#ff6600', //activeTintColor
        drawerInactiveTintColor: '#060606', //inactiveTintColor
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 15 }}>
            <Ionicons name="md-exit" size={25} color={'#060606'} />
            <Text
              style={{ marginLeft: 30 }}
              onPress={() => alert('Cerrando sesión')}>
              Cerrar sesión
            </Text>
          </View>
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen
        name="Nosotros"
        component={Nosotros}
        options={{
          headerShown: false,
          drawerLabel: 'Inicio',
          drawerIcon: ({ color }) => (
            <Ionicons name={'ios-home'} size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Productos"
        component={Productos}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name={'glasses'} size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
             <Ionicons name={'heart'} size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Carrito"
        component={Carrito}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name={'cart'} size={20} color={color} />
          ),
        }}
        
      />
      <Drawer.Screen
        name="Inicia Seción"
        component={InicioSesion}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name={'person-circle'} size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Registro"
        component={Registro}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name={'person-add'} size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
