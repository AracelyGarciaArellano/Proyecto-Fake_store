import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { auth } from '../Firebase';

const InicioSesion = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validar el email y la contraseña y realizar la acción de inicio de sesión
    if (!email || !password) {
      return alert('Datos incorrectos');
    }
    
    // Iniciar sesión con email y contraseña
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Inicio de sesión exitoso');
        // Redirigir al usuario a la pantalla de "Nosotros"
        navigation.navigate('Nosotros');
      })
      .catch((error) => {
        // Manejar el error
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: 18,
          marginHorizontal: 16,
          paddingHorizontal: 8,
        }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleLogin}>
          <View
            style={{
              backgroundColor: '#2196F3',
              width: 100,
              height: 30,
              borderRadius: 20,
              alignSelf: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                margin: 4,
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <View
            style={{
              backgroundColor: 'gray',
              width: 100,
              height: 30,
              borderRadius: 20,
              alignSelf: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                margin: 4,
              }}>
              Register
            </Text>
          </View> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InicioSesion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderTopWidth: 1,
    margin: 5,
    borderRadius: 20,
    padding: 16,
  },
});
