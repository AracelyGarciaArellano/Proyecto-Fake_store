import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { Overlay } from '@rneui/themed';
import { auth, db } from '../Firebase';

const Registro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registro exitoso, puedes realizar acciones adicionales aquí
        updateUI(userCredential.user);
      })
      .catch((error) => {
        // Si el registro falla, muestra un mensaje de error
        setError('Authentication failed.');
        updateUI(null);
      });
  };

  const updateUI = (user) => {
    if (user) {
      setVisible(true);
      // El usuario se registró correctamente, puedes realizar acciones adicionales aquí
      // Ejemplo: redirigir al usuario a una pantalla de inicio
      navigation.navigate('Home');
    } else {
      // El registro falló, puedes realizar acciones adicionales aquí
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={true}
      />
      <Button
        title="Register"
        onPress={handleRegister}
      />

      <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <Text>Registro exitoso!!</Text>
        <Text>Porfavor inicia sesion ahora</Text>
        <Button
          title="Start Building"
          onPress={() => navigation.navigate('InicioSesion')} 
        />
      </Overlay>

      <Button
        title="Inicia Sesion"
        onPress={() => navigation.navigate('InicioSesion')}
      />

      {error && <Text>{error}</Text>}
    </View>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    paddingHorizontal: 10,
  },
});
