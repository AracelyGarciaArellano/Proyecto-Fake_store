import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView ,Image,TouchableOpacity} from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { UsoContext } from '../Context/UsoContext';
import { SearchBar } from '@rneui/themed';

const Productos = ({ navigation }) => {
  const { products, loading, setProducts, setLoading } = useContext(UsoContext);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', { movie: item })}>
      {item.Poster === 'N/A' ? (
        <Image
          style={styles.images}
          
        />
      ) : (
        <Image style={styles.images} source={{ uri: item.Poster }} />
      )}
    </TouchableOpacity>
  );
  return (
    <ScrollView>
      <View styles={styles.container}>
        <Text style={styles.subHeader}>Buscador de Productos</Text>

        <SearchBar
          round
          containerStyle={{
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        />

        <View style={{ margin: 10, fontSize: 20 }}></View>
      </View>
    </ScrollView>
  );
};

export default Productos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subHeader: {
    fontSize: 16,
    backgroundColor: '#a95eb1',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 6,
    marginBottom: 10,
  },
});
/*
.color1 {color: #293460;}
.color2 {color: #5d4483;}
.color3 {color: #a95eb1;}
.color4 {color: #ff87df;}
.color5 {color: #ffb6f4;}
 */
