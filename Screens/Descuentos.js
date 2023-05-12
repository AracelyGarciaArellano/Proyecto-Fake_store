import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Descuentos = ({ route, navigation }) => {
  const {nombre}=route.params; //esto es enviado desde Nosotros 
  return (
    <View styles={styles.container}>
      <Text>{nombre}</Text>
       <Button
        title="Carrito"
        onPress={() => navigation.navigate('Carrito')}
      />
      
      <Button title="Home:Nosotros" onPress={() => navigation.navigate('Nosotros')} />
    </View>
  );
};

export default Descuentos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
