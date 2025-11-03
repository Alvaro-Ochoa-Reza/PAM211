import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState} from 'react'
import PerfilScreen from './PerfilScreen';
import PrincipalScreen from './PrincipalScreen';

export default function MenuScreen() {
    const [screen,setScreen]= useState('menu');

    switch(screen){
        case'perfil':
            return <PerfilScreen/>;
        case'principal':
            return <PrincipalScreen/>
        case'menu':
            default:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}> Pruebas </Text>
                    <Button onPress={()=>setScreen('perfil')} title='Perfil'></Button>
                    <Button onPress={()=>setScreen('principal')} title='Principal'></Button>
                </View>
        ) 
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});