import React, { createContext, useState, useEffect } from 'react';
import {
  Text,
  Card,
  Button,
  Icon,
  CheckBox,
  ButtonGroup,
  ListItem,
  Avatar,
  Divider,
} from '@rneui/themed';

import { View, StyleSheet, TouchableOpacity } from 'react-native'; 
import auth  from '../Settings/ConfigFirebase';
export const UsoContext = createContext();
 
const UsoProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [mostrarTarjetas, setMostrarTarjetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [productDetalle, setProductDetalle] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [tarjetasSeleccionadas, setTarjetasSeleccionadas] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const productcorazon = data.map((p) => ({
          ...p,
          checked: false,
        }));
        setProducts(productcorazon);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const corazon = (id) => {
    setProducts((productosSinChecked) =>
      productosSinChecked.map((p) => ({
        ...p,
        checked: p.id === id ? !p.checked : p.checked,
      }))
    );
  };

  const eliminarDeFav = (id) => {
  setProducts((prevProducts) =>
    prevProducts.map((p) =>
      p.id === id ? { ...p, checked: false } : p
    )
  );
};

  const agregarAlCarrito = (id) => {
  setProducts((prevProducts) =>
    prevProducts.map((p) =>
      p.id === id ? { ...p, added: true } : p
    )
  );
};
//---------------------------------------esta es la modificacion en uso context solamente
const handleLogout = (navigation) => {
    auth.signOut().then(() => {
      navigation.navigate('Login')
    });
  };
  //-----------------------------------------------------

  const eliminarDelCarrito = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === id ? { ...p, added: false } : p
      )
    );
  };

  const funcionBotones = (navigation) => {
    let temporal = [];
    //Joyeria
    if (selectedIndex === 0) {
      temporal = products.filter((p) => p.category === 'jewelery');
    }
    if (selectedIndex === 1) {
      temporal = products.filter(
        (p) => p.category === 'jewelery' || p.category === "women's clothing"
      );
    }
    if (selectedIndex === 2) {
      temporal = products.filter((p) => p.category === "women's clothing");
    }
    const tarjetas = temporal.map((produ, i) => (
  <TouchableOpacity
    key={i}
    onPress={() => {
      navigation.navigate('Details');
      setProductDetalle(produ);
    }}
    style={{
      width: '50%',
      marginBottom: 10,
    }}
  >
    <Card containerStyle={[styles.transparentCard, styles.noBorder]}>
      <View style={{ backgroundColor: '#ffffff', alignItems: 'center', borderRadius: 20, }}>
        <Card.Image
          style={styles.image}
          source={{
            uri: produ.image,
          }}
          resizeMode="contain"
        />
      </View>
      <Text numberOfLines={2} style={{ marginBottom: 2, marginTop: 10, fontWeight: 'bold', }}>
        {produ.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ marginBottom: 10 }}> ${produ.price}</Text>
        <CheckBox
          checked={produ.checked}
          checkedIcon="heart"
          uncheckedIcon="heart-o"
          checkedColor="red"
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
          onPress={() => corazon(produ.id)}
        />
      </View>
    </Card>
  </TouchableOpacity>
));

const tarjetasPorFila = [];
for (let i = 0; i < tarjetas.length; i += 2) {
  const fila = (
    <View style={{ flexDirection: 'row' }} key={i}>
      {tarjetas[i]}
      {tarjetas[i + 1]}
    </View>
  );
  tarjetasPorFila.push(fila);
}

setMostrarTarjetas(tarjetasPorFila);  };

const styles = StyleSheet.create({
  transparentCard: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  noBorder: {
    borderColor: 'transparent',
    elevation: 0, // Establece la elevación en 0 para quitar la sombra
    shadowColor: 'transparent',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

  const enviarAFavoritos = (navigation) => {
    const temporalFavoritos = products.filter((p) => p.checked === true);

    const muestra = temporalFavoritos.map((produF, i) => (
      <ListItem onPress={() => navigation.navigate('Details')} containerStyle={{ backgroundColor: '#f2f2f2' }}>
        <Avatar
          rounded
          resizeMode="cover"
          containerStyle={{
            width: 100,
            height: 100,
            alignSelf: 'stretch',
            justifyContent: 'center',
          }}
          source={{
            uri: produF.image,
          }}
        />

        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
            {produF.title}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: 'black' }}>
            Category: {produF.category}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Icon
                name="trash"
                type="feather"
                size={20}
                color="red"
                onPress={() => eliminarDeFav(produF.id)}
              />
        
      </ListItem>
      
    ));
    setFavoritos(muestra);
  };

  const [visible, setVisible] = useState(false);
  const [mensaje, setmensaje] = useState('');
  
  const eventoOverlay = () => {
    setVisible(!visible);
  };


  return (
    <UsoContext.Provider
      value={{
        products, //nosotros,productos
        setProducts, //productos
        loading, //para nosotros
        setLoading, //para nosotros

        setSelectedIndex, //para productos
        selectedIndex, //productos
        mostrarTarjetas, //productos
        funcionBotones, //productos

        //para detalles
        productDetalle,
        setProductDetalle,
        agregarAlCarrito,
        corazon,
        favoritos, //para favoritos
        enviarAFavoritos,
        eliminarDelCarrito,
        handleLogout,
        visible,
        setVisible,
        mensaje,
        setmensaje,
        eventoOverlay,
      }}>
      {props.children}
    </UsoContext.Provider>
  );
};

export default UsoProvider;
