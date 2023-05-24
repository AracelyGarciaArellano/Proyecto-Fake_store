import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, Button, ListItem, Avatar, Icon } from '@rneui/themed';
import { UsoContext } from '../Context/UsoContext';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

const Carrito = ({ navigation }) => {
  const { products, setProducts, eliminarDelCarrito } = useContext(UsoContext);
  const productosCarrito = products.filter((product) => product.added === true);

  const handleCantidadChange = (productId, cantidad) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, cantidad: cantidad >= 1 ? cantidad : 1 }
          : product
      )
    );
  };

  const total = productosCarrito.reduce((acc, product) => {
    const cantidad = product.cantidad || 1;
    return acc + product.price * cantidad;
  }, 0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontWeight: 'bold', fontSize: 24, alignSelf: 'center',alignItems: 'center', justifyContent: 'center', }}>My car</Text>
      {productosCarrito.length > 0 ? (
        productosCarrito.map((producto) => (
          <ListItem
            key={producto.id}
            onPress={() => navigation.navigate('Detalles')}
            containerStyle={styles.listItemContainer}
          >
            <Avatar
              rounded
              resizeMode="cover"
              containerStyle={styles.avatarContainer}
              source={{
                uri: producto.image,
              }}
            />
            <ListItem.Content style={styles.listItemContent}>
              <ListItem.Title style={styles.titleText}>
                {producto.title}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitleText}>
                ${producto.price}
                <TouchableOpacity
                  style={{
                    backgroundColor: 'transparent',
                    paddingLeft: 17,
                    paddingRight: 10,
                    fontWeight: 'bold',
                  }}
                  onPress={() =>
                    handleCantidadChange(
                      producto.id,
                      (producto.cantidad || 1) - 1
                    )
                  }
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: 'black',
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  <Text>{producto.cantidad || 1}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'transparent',
                    paddingRight: 17,
                    paddingLeft: 10,
                    fontWeight: 'bold',
                  }}
                  onPress={() =>
                    handleCantidadChange(
                      producto.id,
                      (producto.cantidad || 1) + 1
                    )
                  }
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </ListItem.Subtitle>
            </ListItem.Content>
            <Icon
                name="trash"
                type="feather"
                size={20}
                color="red"
                onPress={() => eliminarDelCarrito(producto.id)}
              />
          </ListItem>
        ))
      ) : (
        <Text>No hay productos en el carrito</Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {productosCarrito.length > 0 && (
          <Text>
            Total ({productosCarrito.reduce(
              (total, product) => total + (product.cantidad || 1),
              0
            )} items):
          </Text>
        )}
        {productosCarrito.length > 0 && (
          <Text style={styles.totalText}>${total}</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.carButton}
        onPress={() => navigation.navigate('Productos')}
      >
        <Text style={styles.carButtonText}>Seguir comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Carrito;

const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 1,
    backgroundColor: '#f2f2f2', 
    alignSelf: 'center',
    marginTop: Constants.statusBarHeight,
  },
  listItemContainer: {
    backgroundColor: '#f2f2f2',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2', 
  },
  listItemContent: 
  {
    backgroundColor: '#f2f2f2', 
  },
  titleText: {
    color: 'black',
    fontWeight: 'medium',
  },
  subtitleText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
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
});