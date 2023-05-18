import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import {
  CheckBox,
} from '@rneui/themed';

import { UsoContext } from '../Context/UsoContext';

const Detalles = ({ navigation }) => {
  const { productDetalle, corazon } = useContext(UsoContext);
  const [isChecked, setIsChecked] = useState(productDetalle.checked);

  useEffect(() => {
    setIsChecked(productDetalle.checked);
  }, [productDetalle.checked]);
  
  const handleCheck = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    corazon(productDetalle.id); // Actualiza el estado de check en el contexto
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(productDetalle.id);
    navigation.navigate('Carrito');
  };

  return (
    <View style={styles.containerprincipal}>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subHeader}>
          <Text style={styles.textnegrita}></Text>
          {productDetalle.category.toUpperCase()}
        </Text>
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
        <View style={styles.textContainer}>
          <Text style={styles.text}>{productDetalle.title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.textnegrita, styles.text]}>
            PRICE:
          </Text>
          <Text style={styles.text}>{productDetalle.price}$</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.textnegrita, styles.text]}>
            DESCRIPTION:
          </Text>
          <Text style={styles.text}>{productDetalle.description}</Text>
        </View>
         <Button
            title="Agregar al carrito"
            onPress={handleAgregarAlCarrito}
          />
      </View>
    </ScrollView>
    </View>
  );
};

export default Detalles;

const styles = StyleSheet.create({
  containerprincipal: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  subHeader: {
    fontSize: 16,
    backgroundColor: '#9381ff',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 6,
    marginBottom: 10,
  },
  checkboxContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    borderRadius: 52
  },
  estiloImagen: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
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
  text: {
    fontSize: 15, // Tamaño de la fuente en puntos
    fontFamily: 'Times New Roman',
  },
});