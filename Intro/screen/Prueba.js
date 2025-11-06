import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  StyleSheet,
  Alert,
  Platform,
  FlatList
} from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simula el SplashScreen (2 segundos)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // SplashScreen
  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>📸 Mi Galería</Text>
      </View>
    );
  }

  // 📷 Lista de fotos
  const fotos = [
    { id: '1', titulo: 'Montañas Mágicas', descripcion: 'Una vista increíble de las montañas al amanecer.', imagen: require('../assets/tux.jpg') },
    { id: '2', titulo: 'Bosque Verde', descripcion: 'Naturaleza pura y aire fresco en cada rincón.', imagen: require('../assets/tux.jpg') },
    { id: '3', titulo: 'Atardecer Dorado', descripcion: 'El sol se despide con tonos cálidos y brillantes.', imagen: require('../assets/tux.jpg') },
    { id: '4', titulo: 'Ciudad Nocturna', descripcion: 'Luces y movimiento en la gran metrópolis.', imagen: require('../assets/tux.jpg') },
    { id: '5', titulo: 'Desierto Infinito', descripcion: 'Dunas que se pierden en el horizonte.', imagen: require('../assets/tux.jpg') },
    { id: '6', titulo: 'Océano Azul', descripcion: 'La calma del mar bajo el cielo despejado.', imagen: require('../assets/tux.jpg') }
  ];

  // 🪟 Función que muestra los detalles
  const mostrarDetalles = (foto) => {
    if (Platform.OS === 'web') {
      window.alert(`📸 ${foto.titulo}\n\n${foto.descripcion}`);
    } else {
      Alert.alert(foto.titulo, foto.descripcion, [{ text: 'Cerrar', style: 'cancel' }]);
    }
  };

  // Renderiza cada tarjeta
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
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mi Galería</Text>

      <FlatList
        data={fotos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // 👈 Dos columnas
        columnWrapperStyle={styles.row} // Espaciado horizontal
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
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
    height: 200, // 👈 más pequeño para no llenar la pantalla
    justifyContent: 'flex-end'
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
    fontWeight: 'bold'
  },
  description: {
    color: '#eee',
    fontSize: 12,
    marginVertical: 4
  },
  buttonContainer: {
    alignSelf: 'flex-start'
  }
});
