import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Registro = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <Text></Text>
      <Button
        title="Inicia Sesion"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Registro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});