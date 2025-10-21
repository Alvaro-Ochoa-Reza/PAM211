import { View, Text, StyleSheet, Button, Alert, TextInput, Platform } from 'react-native';
import React, {useState} from 'react';

export default function TextInputScreen() {

  const [nombre, setNombre]= useState('');
  const [contrasena, setContrasena]= useState('');
  const [comentario, setComentario]= useState('');

  const mostrarAlerta =()=>{
  if (nombre.trim()==='' || contrasena.trim()==='' || comentario.trim()==='') {
    if (Platform.OS === 'web') {
      window.alert('ERROR: por favor ingresa tu nombre')
    } else {
      Alert.alert('ERROR: por favor ingresa tu nombre')
    }}
    else {
      if (Platform.OS ==='web') {
        window.alert(`HOLA ${nombre}! Bienvenido`);
      } else {
        Alert.alert('HOLA', `Bienvenido, ${nombre}`);
      }
        if (Platform.OS ==='web') {
          window.alert('Tu comentario: ' + comentario);
        } else {
          Alert.alert('Tu comentario: ' + comentario);
        }
    }} 
    
    return (

    <View style={styles.container}>
      <Text style={styles.titulo}>TextScreen</Text>

      <TextInput style={styles.recuadro}
      placeholder='Escribe tu nombre' 
      value ={nombre} 
      onChangeText={setNombre} 
      maxLength={50}>
      </TextInput>

      <TextInput style={styles.recuadro}
      placeholder='Escribe tu nombre' 
      value ={contrasena} 
      onChangeText={setContrasena} 
      secureTextEntry={true}
      maxLength={50}>
      </TextInput>

      <TextInput style={[styles.recuadro, {height: 100, textAlignVertical:'top'}]}
      placeholder='Escribe tu comentario' 
      value ={comentario} 
      onChangeText={setComentario} 
      multiline={true}
      numberOfLines={4}
      maxLength={150}>
      </TextInput>

      <Button color='blue' title='Mostrar saludo' onPress={mostrarAlerta}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999ff',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recuadro: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
  },
});