import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Carrito = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <Text></Text>
      <Button
        title="Ve tu Historial"
        onPress={() => navigation.navigate('Historial')}
      />
      <Button
        title="Vuelve a productos"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Home:Nosotros"
        onPress={() => navigation.navigate('Nosotros')}
      />
    </View>
  );
};

export default Carrito

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});