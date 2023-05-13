import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { UsoContext } from '../Context/UsoContext';

const Joyeria = ({ navigation }) => {
  return (
    <ScrollView>
      <View styles={styles.container}>
        <Text style={styles.subHeader}>Joyeria</Text>
        

        
      </View>
    </ScrollView>
  );
};

export default Joyeria

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subHeader: {
    fontSize: 16,
    backgroundColor: '#a95eb1',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 6,
    marginBottom: 10,
  },
});