import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Body = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  if (categories.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Text key={index}>{category}</Text>
      ))}
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
});
