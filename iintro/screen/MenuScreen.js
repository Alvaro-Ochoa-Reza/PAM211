import { Text, StyleSheet, View, Buttom } from 'react-native'
import React, { useState} from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';


export default function MenuScreen() {
    const [screen,setScreen]= useState('menu');

    switch(screen){
        case'contador':
            return <ContadorScreen/>;
        case'botones':
            return <BotonesScreen/>;
        case'menu':
            default:
            return (
                <View>
                    <Text> Menu de Practicas </Text>
                    <Buttom onPress={()=>setScreen('contador')} title='Pract:contador'></Buttom>
                    <Buttom onPress={()=>setScreen('botones')} title='Pract:botones'></Buttom>
                </View>
        ) 
    }

}
const styles = StyleSheet.create({})