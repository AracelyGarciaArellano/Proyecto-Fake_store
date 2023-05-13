import React, { useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {View,Image,StyleSheet,ActivityIndicator,Button,Text} from 'react-native';
import Swiper from 'react-native-swiper';
import { UsoContext } from '../Context/UsoContext';
import Constants from 'expo-constants';
import { Divider} from '@rneui/themed';

const Nosotros = ({navigation}) => {
  const { products, loading, setProducts, setLoading } = useContext(UsoContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
      <View style={styles.container}>
      <Text style={styles.text1}>Solo ofrecemos los mejor</Text>
      <Text style={styles.text2}>A continuacion podras observar algunos de la variedad que manejamos en FaStore</Text>
      <Divider style={styles.divider} />
        <Swiper showsButtons={true}>
          {products.map((product) => (
            <View key={product.id} style={styles.slide}>
              <Image
                style={styles.image}
                source={{ uri: product.image }}
                resizeMode="contain"
              />
            </View>
          ))}
        </Swiper>
        <Text style={styles.text2}>Solo ofrecemos los mejores productos, te invitamos a que veas nuestras distintas secciones que te ofrecemos.</Text>
        <StatusBar style="auto"/>
        <Button
          title="Mira todos nuestros productos"
          onPress={() => navigation.navigate('Productos')}
        />
      </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:Constants.statusBarHeight
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    width: '100%',
    height: '20%'
  },
  image: {
    width: '50%',
    height: '50%',
  },
  text1: {
    fontSize: 24, // Tamaño de la fuente en puntos
    fontFamily: 'Times New Roman', // Fuente de la letra
    color: 'black', // Color del texto
    textAlign : "center",marginBottom : 50,
  },
  divider: {
    width: '100%',
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    
  },
  text2: {
    fontSize: 16, // Tamaño de la fuente en puntos
    fontFamily: 'Times New Roman', // Fuente de la letra
    color: 'black', // Color del texto
    textAlign: 'justify',
    marginBottom : 30,
    marginTop : 10,
    
  },
});

export default Nosotros;
