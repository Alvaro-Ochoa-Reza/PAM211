// 1.Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Buttom } from 'react-native';
import React,{useState} from 'react';

//2. Main: Zona de componentes
export default function ContadorScreen() {

    const [contador,setContador]= useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto} > Contador: </Text>
      <Text style={styles.texto2} > {contador} </Text>

      <View style={styles.botonesContainer}>
        <Buttom color='red' title='Agregar' onPress={()=>setContador(contador+1)} />
        <Buttom color='green' title='Quitar' onPress={()=>setContador(contador-1)} />
        <Buttom color='yellow'title='Reiniciar' onPress={()=>setContador(0)} />
      </View> 

      <StatusBar style="auto" />

    </View>


  );
}

//3. Estilos: Zona estética de componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ad36dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#290394ff',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },

   texto2:{
    color:'#d31818ff',
    fontSize:40,
    fontFamily:'Courier',
    fontWeight: '300',
    fontStyle: 'italic',
    textDecorationLine: 'underLine',
  },
  botonesContainer:{
    marginTop:20,
    flexDirection:'row',
    gap:20,
  },


});
