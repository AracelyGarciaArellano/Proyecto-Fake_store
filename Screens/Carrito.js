import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, ListItem, Avatar } from '@rneui/themed';
import { UsoContext } from '../Context/UsoContext';

const Carrito = ({ navigation }) => {
  const { products } = useContext(UsoContext);
  const productosCarrito = products.filter((product) => product.added === true);
  const total = productosCarrito.reduce((acc, product) => acc + product.price, 0);

  return (
    <View style={styles.container}>
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
                Price: ${producto.price}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
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
          }}>
            {productosCarrito.length > 0 && <Text style={styles.totalText}>Total ({productosCarrito.length} items):</Text>}
            {productosCarrito.length > 0 && <Text style={styles.totalText}>${total}</Text>}
      </View>
      <Button title="Ve tu Historial" onPress={() => navigation.navigate('Historial')} />
      <Button title="Vuelve a productos" onPress={() => navigation.goBack()} />
      <Button title="Home:Nosotros" onPress={() => navigation.navigate('Favoritos')} />
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
  listItemContent: {
    backgroundColor: '#f2f2f2', 
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
  },
  subtitleText: {
    color: 'black',
  },
  totalText: {
    color: 'black',
    fontWeight: 'bold',
  },
});