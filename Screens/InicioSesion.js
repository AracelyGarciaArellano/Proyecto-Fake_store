import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const InicioSesion = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <Text></Text>
      <Button
        title="Home:Nosotros"
        onPress={() => navigation.navigate('Nosotros')}
      />
      <Button
        title="Registrate"
        onPress={() => navigation.navigate('Registro')}
      />
    </View>
  );
};

export default InicioSesion

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});