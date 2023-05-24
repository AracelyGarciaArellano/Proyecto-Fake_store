import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import auth from '../Settings/ConfigFirebase';
import { useForm, Controller } from 'react-hook-form';
import { images } from '../assets/images';

const InicioSesion = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    setUsuario()
  }, [usuario]);
  

  const handleLogin = (data) => {
    // Iniciar sesión con email y contraseña
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('Inicio de sesión exitoso');
        setUsuario((user) => ({ ...user, password: '' })); // Limpiar el campo de contraseña
        navigation.navigate('Nosotros');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          alert('Contraseña incorrecta');
        } else {
          alert(error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: 20,
          marginHorizontal: 10,
          paddingHorizontal: 5,
        }}>
        <Image
              source={images.logo}
              style={{ width: 140, height: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 10  }} />
        <Text style={[styles.textnegrita, styles.textTitle]}>Email</Text>
        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Email requerido' },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              message: 'Email inválido',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                setUsuario((user) => ({ ...user, email: text }));
                onChange(text);
              }}
              style={styles.input}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        <Text style={[styles.textnegrita, styles.textTitle]}>Password</Text>
        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Contraseña requerida' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                setUsuario((user) => ({ ...user, password: text }));
                onChange(text);
              }}
              style={styles.input}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
        <TouchableOpacity
            style={styles.carButton}
            onPress={handleSubmit(handleLogin)}
          >
            <Text style={styles.carButtonText}>Login</Text>
        </TouchableOpacity>
        <Button
          titleStyle={{ color: 'black' }}
          title="not registered yet?"
          onPress={() => navigation.navigate('Registro')}
        />
      </View>
    </View>
  );
};

export default InicioSesion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  carButton: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 17,
    borderRadius: 50,
    marginTop: 20,
  },
  carButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});