import React, { useEffect, useContext } from 'react';
import { Text, View,Button } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Nosotros from './StackNavigation1'; 
import Favoritos from '../Screens/Favoritos';
import Carrito from '../Screens/Carrito';
import InicioSesion from '../Screens/InicioSesion';
import Registro from '../Screens/Registro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from '@rneui/themed';
import auth from '../Settings/ConfigFirebase';
import { UsoContext } from '../Context/UsoContext';
import StackNavigation1 from './StackNavigation1';
import BottomTabNavigation1 from './BottomTabNavigation1';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation1() {
   const {handleLogout } = useContext(UsoContext);
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Nosotros"
      screenOptions={{
        //drawerContentOptions
        drawerStyle: {
          backgroundColor: '#ffff',
          width: '80%',
        },
        drawerActiveTintColor: '#876a6a', //activeTintColor
        drawerInactiveTintColor: '#060606', //inactiveTintColor
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 15 }}>
          <Ionicons name="md-exit" size={25} color={'#060606'} />
            <Text
              style={{ marginLeft: 30 }}
              onPress={() => handleLogout(props.navigation)}>
              Cerrar sesión
            </Text>
          </View>
        </DrawerContentScrollView>
      )}
    >
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
        component={BottomTabNavigation1}
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
    </Drawer.Navigator>
  );
}