import React, { createContext, useState } from 'react';
import { Text, Card, Button, Icon } from '@rneui/themed';

export const UsoContext = createContext();

const UsoProvider = (props) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cartasproductos = () => {
    const tarjetasProductos = products.map((p, i) => (
      <Card>
        <Card.Title>{p.category.title}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: 'p.',
          }}
        />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    ));
  };

  return (
    <UsoContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
      }}>
      {props.children}
    </UsoContext.Provider>
  );
};

export default UsoProvider;
