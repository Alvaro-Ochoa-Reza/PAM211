import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Switch, Button, Alert, TextInput, Platform } from 'react-native';

const backgroundImage = require('../assets/persona.webp');

export default function RepasoScreen() {
    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [terminos, setTerminos] = useState(false);

    const mostrarAlerta = () => {
  if (nombre.trim() === '' || correo.trim() === '') {
    Platform.OS === 'web'
      ? window.alert('Llena todos los campos faltantes, por favor')
      : Alert.alert('Error', 'Llena todos los campos faltantes, por favor');
    return;
  }

   const regexNombre = /^[a-zA-Z\s]+$/;
  if (!regexNombre.test(nombre)) {
    Platform.OS === 'web'
      ? window.alert('El nombre solo debe contener letras')
      : Alert.alert('Error', 'El nombre solo debe contener letras');
    return;
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    Platform.OS === 'web'
      ? window.alert('Ingresa un correo válido')
      : Alert.alert('Error', 'Ingresa un correo válido');
    return;
  }

  if (!terminos) {
    Platform.OS === 'web'
      ? window.alert('Debes aceptar los términos y las condiciones')
      : Alert.alert('Error', 'Debes aceptar los términos y las condiciones');
    return;
  }

  Platform.OS === 'web'
    ? window.alert(`Registro exitoso:\nNombre: ${nombre}\nCorreo: ${correo}`)
    : Alert.alert('Éxito', `Registro exitoso:\nNombre: ${nombre}\nCorreo: ${correo}`);
};

  // Splash inicial
    if (showSplash) {
        return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlay}>
            <Text style={styles.title}>Cargando...</Text>
            </View>
        </ImageBackground>
        );
    }

    return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Registro de Usuario</Text>

        <TextInput
          style={styles.recuadro}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.recuadro}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Aceptar todos los términos y condiciones</Text>
          <Switch value={terminos} onValueChange={setTerminos} />
        </View>

        <Button title="Registrarse" color="#007AFF" onPress={mostrarAlerta} />
      </View>
    </ImageBackground>
    );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
  },
  recuadro: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#ffffffc0',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  switchText: {
    color: '#fff',
    marginRight: 10,
    fontSize: 16,
  },
});
