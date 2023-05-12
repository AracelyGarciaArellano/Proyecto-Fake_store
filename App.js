import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation1/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/* 

import { StatusBar } from 'expo-status-bar';
import { Component, useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

//codigo en componente de tipo clase al final
export default function App() {
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    //este setTimeout ejecuta despues de cada cierto tiempo lo que tiene dentro
    const timer = setTimeout(() => {
      setCargado(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {cargado === false ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <HomeScreen />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*<View style={styles.container}>
    <ActivityIndicator size="large" color="#00ff00" />
      <View style={{flex:3}}>{/*Aqui los contenedores son View /}
        <Text>Hola mundo desde {Platform.OS}</Text>
      </View>
      <View style={{flex:2}}>
        <Text>Hola contenedor 2</Text>
      </View>
    </View> 

    */
