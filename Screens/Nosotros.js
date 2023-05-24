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
import Header1 from './Header1';
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
          leftComponent={{
            icon: 'menu',
            color: '#ffffff',
            onPress: () => navigation.openDrawer(),
          }}
          centerComponent={{ text: 'Inicio', style: { color: '#ffffff' } }}
        />

        <View style={styles.container}>
          <Image source={images.homeImg} style={styles.backgroundImage} />

          <View style={styles.overlayContent}>
            <Text style={styles.text1}>Encuentra tu estilo</Text>
            <TouchableOpacity
              style={styles.carButton}
              onPress={() => navigation.navigate('Productos')}
            >
              <Text style={styles.carButtonText}>Comprar ahora</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>
              A continuación podrás observar algunos de la variedad que manejamos en FaStore
            </Text>
          </View>

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

          <Text style={styles.text2}>
            Solo ofrecemos los mejores productos, te invitamos a que veas nuestras distintas secciones que te ofrecemos.
          </Text>
          <StatusBar style="auto" />
          <Button
            title="Mira todos nuestros productos"
            onPress={() => navigation.navigate('Productos')}
          />
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '20%',
  },
  image: {
    width: '50%',
    height: '50%',
  },
  text1: {
    fontSize: 24,
    fontFamily: 'Times New Roman',
    color: 'black',
    textAlign: 'center',
    marginBottom: 50,
  },
  divider: {
    width: '100%',
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  text2: {
    fontSize: 16,
    fontFamily: 'Times New Roman',
    color: 'black',
    textAlign: 'justify',
    marginBottom: 30,
    marginTop: 10,
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
  },
});

export default Nosotros;