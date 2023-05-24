import React, { useEffect, useContext } from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carrito from '../Screens/Carrito';
import Favoritos from '../Screens/Favoritos';
import Productos from '../Screens/Productos';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Nosotros from '../Screens/Nosotros';
 
const Tab = createBottomTabNavigator();

export default function BottomTabNavigation1() {
  return (
    <Tab.Navigator
      initialRouteName="Productos" 
      screenOptions={{
        //Versiones anteriores tabBarOptions
        tabBarActiveTintColor: '#ff6600', //activeTintColor
        tabBarInactiveTintColor: '#060606', //inactiveTintColor
        tabBarShowLabel: true, //showLabel
        tabBarLabelStyle: {
          //labelStyle
          fontSize: 12,
        },
        tabBarStyle: {
          //style
          paddingBottom: 5,
          backgroundColor: '#f3f3f1',
        },
      }}>
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{
          tabBarLabel: 'Carrito',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'cart-outline'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Productos"
        component={Productos}
        options={{
          tabBarLabel: 'Productos',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'glasses-outline'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'heart-circle-outline'} size={20} color={color} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}