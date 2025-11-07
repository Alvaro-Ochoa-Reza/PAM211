import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Alert, Button, Platform, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState, Component } from 'react';

export default function App() {

  const backgroundImage = require('../assets/comida.jpg');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}> Restaurante</Text>
      </View>
    );
  }

  const fotos = [
    { id: '1', 
      titulo: 'Ensalada', 
      descripcion: 'Ensalada con lechuga, arrugula, fresa y mango, con un aderezo de yogurt.', 
      imagen: require('../assets/Ensalada.jpg') 
    },
     { id: '2', 
      titulo: 'Dedos de Queso', 
      descripcion: 'Rebandas de queso rebosadas en pan y servidos con un aderezo.', 
      imagen: require('../assets/PalosQueso.jpg') 
    },
     { id: '3', 
      titulo: 'Lasagña', 
      descripcion: 'Lasagña con salsa de tomate napolitana y carne, con queso parmesano rayado encima. .', 
      imagen: require('../assets/Lasagna.webp') 
    },
     { id: '4', 
      titulo: 'Pescado', 
      descripcion: 'Ensalada con lechuga, arrugula, fresa y mango, con un aderezo de yogurt.', 
      imagen: require('../assets/Pescado.jpg') 
    },
     { id: '5', 
      titulo: 'Vaso de Agua', 
      descripcion: 'Vaso de agua de manantial proveniente se Suiza.', 
      imagen: require('../assets/Agua.jpg') 
    },
     { id: '6', 
      titulo: 'Vaso de Refresco', 
      descripcion: 'Coca-Cola.', 
      imagen: require('../assets/Refresco.jpg') 
    },
     { id: '7', 
      titulo: 'Pay de Queso', 
      descripcion: 'Pay de Queso, servido con una salsa de fresa.', 
      imagen: require('../assets/Pay.jpg') 
    },
     { id: '8', 
      titulo: 'Brownie de Chocolate', 
      descripcion: 'Brownie de chocolate, cubierto con salsa de chocolate y servido con una bola de helado de chocolate.', 
      imagen: require('../assets/Brownie.jpg') 
    },
  ];

  const [nosequeponer, setNosequponer] = {useState} (true);

  const mostrarDetalles = (foto) => {
    if (Platform.OS === 'web') {
      window.alert(`${foto.titulo}\n\n${foto.descripcion}`);
    }
  }  

  if (showSplash) {
        return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlay}>
            <Text style={styles.title}>Cargando...</Text>
            </View>
        </ImageBackground>
        );
    }

   const renderItem = ({ item }) => (
    <View style={styles.card}>
      <ImageBackground
        source={item.imagen}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.titulo}</Text>
          <Text style={styles.description}>{item.descripcion}</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Ver detalles"
              onPress={() => mostrarDetalles(item)}
              color="#4682B4"
            />
            <Button
              title="Ordenar platillo."
              onPress={() => setNosequponer(foto)}
              color="#FFFFFF"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  <ImageBackground 
        source={backgroundImage}
        style={styles.fondo}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}> </Text>
          <Button onPress={() => nosequeponer() title="hamstér a la plancha con salsa de flores"}></Button>
          <Text style={styles.textoprincipal}> Restaurante </Text>
        </View>
      </ImageBackground>

  return (
      <ImageBackground
        source={item.imagen}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
      <View style={styles.container}>
      <ScrollView style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent} 
        showVerticalScrollIndicator={true}>
      
      <Text style={styles.subtitle}>Entradas</Text>

      <Text style={styles.subtitle}>Platos Principales</Text>

      <Text style={styles.subtitle}>Bebidas</Text>

      <Text style={styles.subtitle}>Postres</Text>

      <Text style={styles.header}>Restaurante</Text>

      <FlatList
        data={fotos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} 
        scrollsToTop={(item) => item.id}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
      </ScrollView>
    </View>
    </ImageBackground>
  );
 }


const {withd, heigth} = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#ffffff18',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f202',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#4682B4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 10
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2F4F4F'
  },
  row: {
    justifyContent: 'space-between'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    flex: 1,
    marginHorizontal: 5,
    elevation: 4
  },
  image: {
    height: 200,
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  description: {
    color: '#eee',
    fontSize: 12,
    marginVertical: 4
  },
  buttonContainer: {
    alignSelf: 'flex-start',
  },
  scrollArea: {
    flex: 1,
  },
   scrollContent: {
    alignItems: 'center',
    padding: 20,
    paddingVertical: 20, 
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFFF',
    textAlign: 'center',
    backgroundColor: '#fff59fff',
    borderRadius: 10,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
  },
  fondo: {
    alignItems: 'center',
    padding: 20,
    paddingVertical: 15,
    color: '#f3efef5e'
  },
});
