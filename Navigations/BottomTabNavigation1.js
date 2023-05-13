import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Electronicos from '../Screens/Electronicos';
import Joyeria from '../Screens/Joyeria';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Nosotros from '../Navigations/StackNavigation1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation1() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Nosotros}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'ios-home'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Electronicos"
        component={Electronicos}
        options={{
          tabBarLabel: 'Electronicos',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'ios-settings'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Joyeria"
        component={Joyeria}
        options={{
          tabBarLabel: 'Joyeria',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'ios-help-circle'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
