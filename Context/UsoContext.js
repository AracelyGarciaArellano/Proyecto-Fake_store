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
import auth  from '../Settings/ConfigFirebase';

import { View } from 'react-native';

export const UsoContext = createContext();

const UsoProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [mostrarTarjetas, setMostrarTarjetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [productDetalle, setProductDetalle] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

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
      navigation.navigate('InicioSesion')
    });
  };
  //-----------------------------------------------------

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
      <Card key={i}>
        <Card.Title>{produ.title}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: produ.image,
          }}
          resizeMode="contain"
        />
        <Text style={{ marginBottom: 10 }}> Precio: {produ.price}$</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Button
            onPress={() => {
              navigation.navigate('Detalles');
              setProductDetalle(produ);
            }}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Detalles"
          />
          <CheckBox
            checked={produ.checked}
            checkedIcon="heart"
            uncheckedIcon="heart-o"
            checkedColor="red"
            onPress={() => corazon(produ.id)}
          />
        </View>
      </Card>
    ));
    setMostrarTarjetas(tarjetas);
  };

  const enviarAFavoritos = (navigation) => {
    const temporalFavoritos = products.filter((p) => p.checked === true);

    const muestra = temporalFavoritos.map((produF, i) => (
      <ListItem onPress={() => navigation.navigate('Detalles')}>
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
        <ListItem.Chevron color="black" />
        
      </ListItem>
      
    ));
    setFavoritos(muestra);
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
        handleLogout,//------------------Solo actualize este en usoContext
      }}>
      {props.children}
    </UsoContext.Provider>
  );
};

export default UsoProvider;
