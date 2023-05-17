import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import {Header} from 'react-native-elements';
import { Header } from '@rneui/themed';

const Header1 = ({ navigation }) => {
   
  return(
    <View style={styles.container}>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          //onPress: () => navigation.openDra0wer(),
        }}
        centerComponent={{ text: 'Inicio', style: { color: '#fff' } }}
      />
    </View>
  );
};

export default Header1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});