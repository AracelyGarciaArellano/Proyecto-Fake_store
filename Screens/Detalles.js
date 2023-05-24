import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from '@rneui/themed';

import { UsoContext } from '../Context/UsoContext';

const Detalles = ({ navigation }) => {
  const { productDetalle, corazon, agregarAlCarrito } = useContext(UsoContext);
  const [isChecked, setIsChecked] = useState(productDetalle.checked);

  useEffect(() => {
    setIsChecked(productDetalle.checked);
  }, [productDetalle.checked]);

  const handleCheck = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    corazon(productDetalle.id);
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(productDetalle.id);
    navigation.navigate('Shopping Cart');
  };

  return (
    <View style={styles.containerprincipal}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={isChecked}
              checkedIcon="heart"
              uncheckedIcon="heart-o"
              checkedColor="red"
              onPress={handleCheck}
            />
          </View>
          <View style={styles.estiloImagen}>
            <Image
              style={styles.image}
              source={{
                uri: productDetalle.image,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.contentContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.textnegrita, styles.textTitle]}>
                {productDetalle.title}
              </Text>
              <Text
                style={[
                  styles.textnegrita,
                  styles.textTitle,
                  styles.textPrice,
                ]}>
                ${productDetalle.price}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.textnegrita, styles.text,{ margin: 10 }]}>
                DESCRIPTION:
              </Text>
              <Text style={styles.text}>{productDetalle.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.carButton}
              onPress={handleAgregarAlCarrito}>
              <Text style={styles.carButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detalles;

const styles = StyleSheet.create({
  containerprincipal: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    width: 300,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    borderRadius: 52,
  },
  carButton: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 17,
    borderRadius: 50,
    marginTop: 20,
  },
  carButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  estiloImagen: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textnegrita: {
    fontWeight: 'bold',
  },
  textPrice: {
    marginLeft: 5,
  },
  textTitle: {
    fontSize: 20, // Tamaño de la fuente en puntos
    fontFamily: 'Times New Roman',
  },
  text: {
    fontSize: 15, // Tamaño de la fuente en puntos
    fontFamily: 'Times New Roman',
  },
});
