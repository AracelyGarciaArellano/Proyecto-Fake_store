import React, { useEffect, useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Text, Card, Button, Icon, ButtonGroup } from '@rneui/themed';
import { UsoContext } from '../Context/UsoContext';
//import { SearchBar } from '@rneui/themed';

const Productos = ({ navigation }) => {
  const {
    selectedIndex,
    setSelectedIndex,
    mostrarTarjetas,
    funcionBotones,
    setProductDetalle,
    products,
  } = useContext(UsoContext);

  useEffect(() => {
    funcionBotones(navigation);
  }, [selectedIndex, products]);

  const buttonColors = ['#C0C0C0', '#C0C0C0', '#C0C0C0'];

  return (
    <ScrollView>
      <View style={styles.container}>
        <ButtonGroup
          buttons={['Jewelry', 'All', 'Womens clothing']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={[
            styles.buttonGroup,
            {backgroundColor: buttonColors[selectedIndex]},
          ]}
          textStyle={styles.buttonText} 
        />
        <View>
          {mostrarTarjetas && mostrarTarjetas.length > 0 ? (
            mostrarTarjetas
          ) : (
            <Text>No products available</Text>
          )}
        </View>
        <View style={{ margin: 10, fontSize: 20 }}></View>
      </View>
    </ScrollView>
  );
};

export default Productos;

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
  buttonGroup: {
    marginBottom: 20,
    borderRadius: 52,
  },
  buttonText: {
    color: 'black',
  },
});
/*
.color1 {color: #293460;}
.color2 {color: #5d4483;}
.color3 {color: #a95eb1;}
.color4 {color: #ff87df;}
.color5 {color: #ffb6f4;}
 */
