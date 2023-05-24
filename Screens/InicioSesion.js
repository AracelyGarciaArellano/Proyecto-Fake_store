import React, { useState,useEffect,useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import auth from '../Settings/ConfigFirebase';
import { useForm, Controller } from 'react-hook-form';
import { images } from '../assets/images';
import { UsoContext } from '../Context/UsoContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Overlay, Icon } from '@rneui/themed';

const InicioSesion = ({ navigation }) => {
     const { visible, setVisible, mensaje, setmensaje, eventoOverlay } =
    useContext(UsoContext); 

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue(false);
  }, []);

  const handleLogin = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          setVisible(true);
          setmensaje('Contraseña incorrecta');
        }
        if (error.code === 'auth/user-not-found') {
          setVisible(true);
          setmensaje('Email no registrado');
        } else {
          console.log(error.message);
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
              onChangeText={(txt) => {
                onChange(txt);
                setValue('email', txt.trim());
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
              onChangeText={onChange}
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
        <TouchableOpacity
            style={styles.secondButton}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ color: 'blue' }}>not registered yet?</Text>
        </TouchableOpacity>
      </View>
      <Overlay isVisible={visible} onBackdropPress={eventoOverlay}>
        <View>
          <Ionicons name={'alert-outline'} size={50} style={{ textAlign: 'center' }}/>
          <Text style={styles.textPrimary}>{mensaje}</Text>
          <Button title="Cerrar" onPress={eventoOverlay} />
        </View>
      </Overlay>
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
  secondButton: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
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