import React, { useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Button,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import { UsoContext } from '../Context/UsoContext';
import { Divider, Card, Icon } from '@rneui/themed';
import { Header } from '@rneui/themed';
import { images } from '../assets/images';

const Nosotros = ({ navigation }) => {
  const { products, loading, setProducts, setLoading } = useContext(UsoContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.containerprincipal}>
      <ScrollView>
        <Header
          containerStyle={{ backgroundColor: '#ffffff' }}
          leftComponent={{
            icon: 'menu',
            color: '#000000',
            onPress: () => navigation.openDrawer(),
          }}
          rightComponent={
            <Image
              source={images.logo}
              style={{ width: 50, height: 30 }}
            />
          }
        />

        <View style={styles.container}>
          <Image source={images.homeImg} style={styles.backgroundImage} />

          <View style={styles.overlayContent}>
            <Text style={styles.text1}>Encuentra{'\n'}tu estilo</Text>
            <TouchableOpacity
              style={styles.carButton}
              onPress={() => navigation.navigate('Productos')}
            >
              <Text style={styles.carButtonText}>Comprar ahora</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>
              Visita nuestro catalogo
            </Text>
          </View>

          <Swiper showsButtons={true} containerStyle={{ height: 400}}>
            {products.map((product) => (
              <View key={product.id} style={styles.slide}>
                <Image
                  style={styles.image}
                  source={{ uri: product.image }}
                  resizeMode="contain"
                  onPress={() => navigation.navigate('Productos')}
                />
              </View>
            ))}
          </Swiper>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerprincipal: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    backgroundColor:'#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50',
    height: '100',
  },
  image: {
    width: '50',
    height: '100',
  },
  text1: {
    fontSize: 50,
    fontFamily: 'Times New Roman',
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    fontFamily: 'Times New Roman',
    color: 'black',
    textAlign: 'justify',
    marginTop: 15,
    fontWeight: 'bold',
  },
  carButton: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 17,
    borderRadius: 50,
    marginBottom:5
  },
  carButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 300,
    zIndex: -1,
  },
  overlayContent: {
    position: 'relative',
    zIndex: 1,
    marginTop:120,
    marginBottom:0
  },
});

export default Nosotros;