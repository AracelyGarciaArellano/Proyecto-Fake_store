import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Nosotros = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <Text></Text>
      <Button
        title="Home: Nosotros"
        onPress={() => navigation.navigate('Nosotros')}
      />
    </View>
  );
};

export default Nosotros;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});