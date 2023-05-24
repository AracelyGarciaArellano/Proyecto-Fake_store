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
  TouchableOpacity,
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
            <Image source={images.logo} style={{ width: 50, height: 30 }} />
          }
        />

        <View style={styles.container}>
          <Image source={images.portada} style={styles.backgroundImage} />

          <View style={styles.overlayContent}>
            <Text style={styles.text1}>Find{'\n'}your style</Text>
            <TouchableOpacity
              style={styles.carButton}
              onPress={() => navigation.navigate('Products')}>
              <Text style={styles.carButtonText}>Buy now</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>Visit our catalog</Text>
          </View>

          <Swiper
            showsButtons={true}
            containerStyle={{ height: 300, color: 'red' }}>
            {products.map((product) => (
              <View key={product.id} style={styles.slide}>
                <Image
                  style={styles.image}
                  source={{ uri: product.image }}
                  resizeMode="contain"
                  onPress={() => navigation.navigate('Products')}
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

    justifyContent: 'flex-start',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 0,
    height: 0,
    borderRadius: 20,
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 30,
    marginBottom: 5,
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 20,
  },
  carButton: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 17,
    borderRadius: 50,
    marginBottom: 5,
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
    marginTop: 120,
    marginBottom: 0,
  },
});

export default Nosotros;
