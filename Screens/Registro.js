import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
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

      <Button title="Register" onPress={handleSubmit(handleRegister)} />

      <Overlay isVisible={Boolean(errors.registrationError)}>
        <Text>Registro fallido</Text>
        <Text>{errors.registrationError?.message}</Text>
        <Button
          title="Cerrar"
          onPress={() => setError('registrationError', null)}
        />
      </Overlay>

      <Button
        title="Inicia Sesion"
        onPress={() => navigation.navigate('InicioSesion')}
      />
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
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});
