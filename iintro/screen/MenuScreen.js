import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState} from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import RepasoScreen from './RepasoScreen';
import PerfilScreen from './PerfilScreen';
import PrincipalScreen from './PrincipalScreen';

export default function MenuScreen() {
    const [screen, setScreen]= useState('menu');

    switch(screen){
        case'contador':
            return <ContadorScreen/>;
        case'botones y switch':
            return <BotonesScreen/>;
        case'text input y alert':
            return <TextInputScreen/>
        case'image background y splashscreen':
            return <ImageBackgroundScreen/>
        case'scrollview':
            return <ScrollViewScreen/>;
        case'activity indicator':
            return <ActivityIndicatorScreen/>;
        case'flat list':
            return <FlatListScreen/>
        case'modal':
            return <ModalScreen/>
        case'repaso':
            return <RepasoScreen/>;
        case'perfil':
            return <PerfilScreen/>
        case'principal':
            return <PrincipalScreen/>;
        case'menu':
            default:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}> Menu de Practicas </Text>
                    <Button onPress={()=>setScreen('contador')} title='Pract: contador'></Button>
                    <Button onPress={()=>setScreen('botones y switch')} title='Pract: botones y switch'></Button>
                    <Button onPress={()=>setScreen('text input y alert')} title='Pract: text input y alert'></Button>
                    <Button onPress={()=>setScreen('image background y splashscreen')} title='Pract: image background y splashscreen'></Button>
                    <Button onPress={()=>setScreen('activity indicator')} title='Pract: activityindicator'></Button>
                    <Button onPress={()=>setScreen('scrollview')} title='Pract: scrollview'></Button>
                    <Button onPress={()=>setScreen('flat list')} title='Pract: flat list y section list'></Button>
                    <Button onPress={()=>setScreen('modal')} title='Pract: modal'></Button>
                    <Button onPress={() => setScreen('repaso')} title= 'Pract: repaso' />
                        <Button onPress={() => setScreen('perfil')} title= 'Perf' />
                            <Button onPress={() => setScreen('principal')} title= 'Princ' />

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
})
    