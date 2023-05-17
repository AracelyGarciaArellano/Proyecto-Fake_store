import React, { useEffect, useContext, useState } from 'react';
import {  View, StyleSheet,TouchableOpacity  } from 'react-native';
import { Text, Button, Icon, ButtonGroup,ListItem, Avatar,Divider} from '@rneui/themed';
import { UsoContext } from '../Context/UsoContext';

const Favoritos = ({ route, navigation }) => {
  const {
    selectedIndex,
    setSelectedIndex,
    mostrarTarjetas,
    funcionBotones,
    setProductDetalle,
    products,
    favoritos,
    enviarAFavoritos,
  } = useContext(UsoContext);

  useEffect(() => {
    enviarAFavoritos(navigation);
  }, [products]);
  
  //const {nombre}=route.params; //esto es enviado desde Nosotros ejemplo de route
  return (
   
    <View style={styles.container}>
      
      <View>
          {favoritos && favoritos.length > 0 ? (
            favoritos
          ) : (
            <Text>No hay favoritos </Text>
          )}
        </View>

      <Button
        title="Home:Nosotros"
        onPress={() => navigation.navigate('Nosotros')}
      />
    </View>
  );
};

export default Favoritos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
