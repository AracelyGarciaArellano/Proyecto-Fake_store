import React from 'react';
import { View, Text, TextInput, Image,TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { images } from '../assets/images';
import auth from '../Settings/ConfigFirebase';

const Registro = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleRegister = (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Registro exitoso, puedes realizar acciones adicionales aquí
        updateUI(userCredential.user);
      })
      .catch((error) => {
        // Si el registro falla, muestra un mensaje de error
        setError('registrationError', { message: error.message });
        updateUI(null);
      });
  };

  const updateUI = (user) => {
    if (user) {
      // El usuario se registró correctamente, puedes realizar acciones adicionales aquí
      // Ejemplo: redirigir al usuario a una pantalla de inicio
      navigation.navigate('Home');
    } else {
      // El registro falló, puedes realizar acciones adicionales aquí
    }
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
              onChangeText={onChange}
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
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              style={styles.input}
              secureTextEntry={true}
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
            onPress={() => navigation.navigate('InicioSesion')}
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
