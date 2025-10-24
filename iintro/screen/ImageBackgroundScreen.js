import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const backgroundImage = require('../assets/Baki.webp');

export default function ImageBackgroundScreen({ navigation }) {
    
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <ImageBackground 
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}> Bienvenido </Text>
          <Text style={styles.title}> Cargando... </Text>
        </View>
      </ImageBackground>
    )
  }
  return (
    <ImageBackground 
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
    >
    <View style={styles.mainScreen}>
      <Text style={styles.mainText}>Bienvenido a la pantalla principal</Text>
    </View>
    </ImageBackground>
  );
}  
  
const {width, heigth} = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width: width,
    height: heigth,
  },  
  overlay: {
    flex: 1,
    backgroundColor: '#71756f7a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f202',
  },
  mainText: {
    fontSize: 24,
    color: '#ffffffff',
  },
});