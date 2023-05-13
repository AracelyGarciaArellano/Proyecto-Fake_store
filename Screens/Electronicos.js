import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { UsoContext } from '../Context/UsoContext';

const Electronicos = ({ navigation }) => {
  const { products, loading, setProducts, setLoading } = useContext(UsoContext);
  return (
    <ScrollView>
      <View styles={styles.container}>
        <Text style={styles.subHeader}>Electronicos</Text>
        
      </View>
    </ScrollView>
  );
};

export default Electronicos

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