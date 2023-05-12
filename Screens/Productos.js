import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Productos = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <Text></Text>
      
      <Button
        title="Conoce nuestros descuentos"
        onPress={() => navigation.navigate('Descuentos', { nombre: 'Hola Descuentos' })}//este es el parametro enviado a descuentos
      />
      <Button
        title="Carrito"
        onPress={() => navigation.navigate('Carrito')}
      />
      <Button title="Home:Nosotros" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Productos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
