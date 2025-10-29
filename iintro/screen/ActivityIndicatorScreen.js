import { View, Text, StyleSheet, Platform, ActivityIndicator, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function ActivityIndicatorScreen(){

  const [cargando, setCargando] = useState(false);

  const carga =()=>{
    setCargando(true);
    setTimeout(()=>{
      setCargando(false);
      if(Platform.OS === 'web'){
        window.alert('Carga completa');
      } else {
        Alert.alert('Carga completa');
      }
    }, 3000);
  }
     
  return (
  
    <View style={styles.container}>
      <Text style={styles.texto}>Presione para iniciar la carga</Text>
      <View style={styles.botonesContainer}>
        {cargando ? (<ActivityIndicator size='large' color='red'></ActivityIndicator>) : 
        (<Button color= 'brown' title='Presiones para iniciar' onPress={carga}></Button>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#000000ff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  botonesContainer: {
    marginTop: 20,
    gap: 20,
  },
});