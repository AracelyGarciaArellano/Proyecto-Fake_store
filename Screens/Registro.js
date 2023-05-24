import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Image,TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { images } from '../assets/images';
import auth from '../Settings/ConfigFirebase';
import { UsoContext } from '../Context/UsoContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Registro = ({ navigation }) => {
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

  
  const [visible2, setVisible2] = useState(false);

  const handleRegister = ({ email, password }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setVisible2(true);
        
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setVisible(true);
          setmensaje('Email existente');
        } else {
          alert(error.message);
        }
      });
  };

  const eventoOverlay2 = () => {
    setVisible2(!visible);
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
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
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
            onPress={handleSubmit(handleRegister)}
          >
            <Text style={styles.carButtonText}>Register</Text>
        </TouchableOpacity>

        <Overlay isVisible={Boolean(errors.registrationError)}>
          <Text>Registro fallido</Text>
          <Text>{errors.registrationError?.message}</Text>
          <Button
            title="Cerrar"
            onPress={() => setError('registrationError', null)}
          />
        </Overlay>
        <TouchableOpacity
            style={styles.secondButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: 'blue' }}>Already registered</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registro;

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
  secondButton: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
  },
});
