import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function FlatListScreen(){
     
        return (
        <View style={styles.container}>
          <Text style={styles.texto}>Próximamente: FlatList y Section List</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});