import { Text, View, StyleSheet, FlatList, SectionList } from 'react-native'

export default function FlatListScreen() {
  // FlatList → resumen de juegos Persona
  const personas = [
    {
      id: '1',
      nombre: 'Persona 3 Reload',
      descripcion: 'Explora la Dark Hour y enfréntate a las Sombras con el poder de tus Personas.',
      color: '#1A237E',
    },
    {
      id: '2',
      nombre: 'Persona 4 Golden',
      descripcion: 'Descubre la verdad tras la niebla en el misterioso pueblo de Inaba.',
      color: '#FBC02D',
    },
    {
      id: '3',
      nombre: 'Persona 5 Royal',
      descripcion: 'Lidera a los Ladrones Fantasma y roba los corazones corruptos de la sociedad.',
      color: '#C62828',
    },
  ];

  // SectionList → detalles por cada juego
  const detalles = [
    {
      titulo: 'Persona 3 Reload',
      color: '#1A237E',
      data: [
        'Protagonista: SEES (Specialized Extracurricular Execution Squad).',
        'Temas: muerte, aceptación y esperanza.',
        'Estilo visual: tonos azules y atmósfera melancólica.',
      ],
    },
    {
      titulo: 'Persona 4 Golden',
      color: '#FBC02D',
      data: [
        'Protagonista: Yu Narukami y el Investigation Team.',
        'Temas: verdad, identidad y autodescubrimiento.',
        'Estilo visual: amarillo vibrante y cálido.',
      ],
    },
    {
      titulo: 'Persona 5 Royal',
      color: '#C62828',
      data: [
        'Protagonista: Joker y los Phantom Thieves.',
        'Temas: libertad, rebelión y justicia social.',
        'Estilo visual: rojo intenso y estilo cómic.',
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Saga Persona</Text>

      {/* FlatList */}
      <View style={styles.listContainer}>
        <Text style={styles.titulo}>FlatList — Resumen</Text>
        <FlatList
          data={personas}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, { borderLeftColor: item.color }]}>
              <Text style={[styles.nombre, { color: item.color }]}>{item.nombre}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
          )}
        />
      </View>

      {/* SectionList */}
      <View style={styles.listContainer}>
        <Text style={styles.titulo}>SectionList — Detalles</Text>
        <SectionList
          sections={detalles}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={[styles.header, { backgroundColor: section.color }]}>{section.titulo}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 10,
  },
  listContainer: {
    flex: 1,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    borderLeftWidth: 6,
    width: 260,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcion: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'justify',
  },
  item: {
    backgroundColor: '#1e1e1e',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 4,
    borderRadius: 8,
    color: '#f5f5f5',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
});
