import React, { createContext, useState, useEffect } from 'react';
import { Text, Card, Button, Icon,CheckBox } from '@rneui/themed';
import {View} from 'react-native';

export const UsoContext = createContext();

const UsoProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [mostrarTarjetas, setMostrarTarjetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [checked, setState] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleCheckbox = () => setState(!checked);

  const funcionBotones = () => {
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
        <Text style={{ marginBottom: 10 }}> Precio: {produ.price}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Detalles"
        />
        <CheckBox
           checked={checked}
           checkedIcon="heart"
           uncheckedIcon="heart-o"
           checkedColor="red"
           onPress={toggleCheckbox}
         />
        </View>
        
      </Card>
    ));
    setMostrarTarjetas(tarjetas);
  };

  return (
    <UsoContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        
        setSelectedIndex,
        selectedIndex,
        mostrarTarjetas,
        funcionBotones,
      }}>
      {props.children}
    </UsoContext.Provider>
  );
};

export default UsoProvider;
