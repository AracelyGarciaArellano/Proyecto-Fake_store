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
      initialRouteName="Products" 
      screenOptions={{
        //Versiones anteriores tabBarOptions
        tabBarActiveTintColor: '#000000', //activeTintColor
        tabBarInactiveTintColor: '#87CEEB', //inactiveTintColor
        tabBarShowLabel: true, //showLabel
        tabBarLabelStyle: {
          //labelStyle
          fontSize: 14,
        },
        tabBarStyle: {
          //style
          paddingBottom: 5,  
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Tab.Screen
        name="Shopping Cart"
        component={Carrito}
        options={{
          headerShown: false,
          tabBarLabel: 'Shopping Cart',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'cart-outline'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Productos}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'glasses-outline'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favoritos}
        options={{
           headerShown: false,
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'heart-circle-outline'} size={20} color={color} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}