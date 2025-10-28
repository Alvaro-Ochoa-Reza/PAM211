import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import React, { Component } from 'react';

const backgroundImage = require('../assets/FP4G.jpg');

export default function ScrollViewScreen() {
     
        return (
        
        <ImageBackground 
        source={backgroundImage} 
        style={styles.background}
        resizeMode="cover"
        >
        <View style ={styles.container}>
          <ScrollView style={styles.scrollArea} 
          contentContainerStyle={styles.scrollContent} 
          showVerticalScrollIndicator={true}>

          <Text style={styles.title}>Persona 4 Golden</Text>
          <Text style={styles.item}>Descubre la verdad tras la niebla.</Text>

          <Text style={styles.text}>
            Persona 4 Golden es una versión mejorada del clásico Persona 4, desarrollada por Atlus. Lanzada originalmente 
            en 2012 para PlayStation Vita, amplía todos los aspectos del juego original: historia, personajes, 
            eventos y sistemas de juego. Gracias a su equilibrio entre misterio, comedia y emoción, se convirtió 
            en uno de los JRPG más queridos de todos los tiempos.
          </Text>

          <Text style={styles.subtitleRed}>Historia</Text>
          <Text style={styles.text}>
            {"La historia transcurre en Inaba, un pequeño y tranquilo pueblo rural. El protagonista, un estudiante transferido desde la ciudad, llega a vivir con su tío Dojima y su prima Nanako. Poco después, comienzan una serie de misteriosos asesinatos vinculados a una extraña transmisión televisiva llamada el “Canal de Medianoche.\n\n"}
            {"Durante la investigación, el grupo de amigos descubre que puede entrar al mundo dentro del televisor, donde enfrentan “Sombras”, manifestaciones oscuras del inconsciente humano. Cada miembro del equipo debe confrontar su propia Sombra para aceptar quién es realmente."}
          </Text>

          <Text style={styles.subtitleRed}>Personajes principales</Text>
          <Text style={styles.text}>
            {"- Protagonista (Yu Narukami / nombre personalizado): líder silencioso del grupo.\n"}
            {"- Yosuke Hanamura: bromista y leal, representa la juventud.\n"}
            {"- Chie Satonaka: energética amante del kung-fu.\n"}
            {"- Yukiko Amagi: elegante y amable, lucha por su propio camino.\n"}
            {"- Kanji Tatsumi: rudo pero sensible y artístico.\n"}
            {"- Rise Kujikawa: idol retirada buscando su identidad.\n"}
            {"- Naoto Shirogane: detective prodigio con conflictos de identidad.\n"}
            {"- Marie (Golden): misteriosa del Margen de Medianoche, clave en nuevos contenidos."}
          </Text>

          <Text style={styles.subtitleRed}>Jugabilidad</Text>
          <Text style={styles.text}>
            {"Combina la exploración de mazmorras generadas aleatoriamente con un sistema de combate por turnos clásico pero profundo. Fuera del combate, el jugador puede gestionar su vida diaria: asistir a clases, trabajar a medio tiempo, participar en clubes escolares y fortalecer vínculos sociales (“Social Links”) que mejoran las habilidades de combate.\n\n"}
            {"En el mundo del Canal de Medianoche, exploras mazmorras temáticas basadas en los miedos de cada personaje. El combate usa el sistema de debilidades elementales, con mecánicas de “One More!” y “All-Out Attacks” para combos estratégicos.\n\n"}
            {"Golden añade nuevos Social Links (Marie y Adachi), actividades extra, más escenas animadas, trajes, música y eventos de temporada.\n\n"}
          </Text>

          <Text style={styles.subtitleRed}>Temas y simbolismo</Text>
          <Text style={styles.text}>
            {"El juego profundiza en la búsqueda de la verdad, tanto externa (resolver los asesinatos) como interna (aceptarse a uno mismo). Cada mazmorra es una metáfora de los secretos o inseguridades del personaje que la habita.\n\n"}
            {"Cada personaje enfrenta su “sombra”, una representación de los aspectos de sí mismos que rechazan, aprendiendo a aceptarse completamente.\n\n"}
            {"La constante “niebla” simboliza la confusión y las máscaras que usamos para no enfrentar la realida. Mensaje central: “Solo al aceptar tu verdadero yo puedes ver la verdad del mundo.”"}
          </Text>

          <Text style={styles.subtitleRed}>Estilo visual y musical</Text>
          <Text style={styles.text}>
            {"Destaca por su paleta amarilla brillante, que contrasta con los tonos más oscuros de los temas. La banda sonora de Shoji Meguro es legendaria, con temas como “Reach Out to the Truth”, “Time to Make History” y “Heaven”. El estilo artístico mezcla anime con estética pop rural, creando un ambiente acogedor pero misterioso.\n\n"}
          </Text>

          <Text style={styles.subtitleRed}>Recepción y legado</Text>
          <Text style={styles.text}>
            {"- Considerado uno de los mejores JRPG de todos los tiempos.\n"}
            {"- Fue la joya del catálogo de PS Vita.\n"}
            {"- Su lanzamiento en PC (2020) y consolas modernas (2023) lo llevó a una nueva generación de jugadores.\n"}
            {"- Dio origen al anime “Persona 4 The Animation” y varios spin-offs (“Persona 4 Arena”, “Dancing All Night”).\n"}
            {"- A menudo descrito como “el Persona del corazón” por su calidez y desarrollo de personajes.\n"}
          </Text>

          <Text style={styles.subtitleRed}>Temas y simbolismo</Text>
          <Text style={styles.text}>
            {"El juego profundiza en la búsqueda de la verdad, tanto externa (resolver los asesinatos) como interna (aceptarse a uno mismo). Cada mazmorra es una metáfora de los secretos o inseguridades del personaje que la habita.\n\n"}
            {"La constante “niebla” simboliza la confusión y las máscaras que usamos para no enfrentar la realida. Mensaje central: “Solo al aceptar tu verdadero yo puedes ver la verdad del mundo.”"}
          </Text>

          <Text style={styles.subtitleRed}>Estilo y ambientación</Text>
          <Text style={styles.text}>
            A diferencia del tono urbano y rebelde de Persona 5, Persona 4 Golden brilla por su ambiente cálido, 
            sus amistades sinceras y el equilibrio entre la luz y la oscuridad. Inaba se siente viva, y cada interacción aporta a la 
            sensación de comunidad.
          </Text>

          <Text style={styles.subtitleRed}>Curiosidades</Text>
          <Text style={styles.text}>
            {"- El “Canal de Medianoche” fue inspirado por leyendas urbanas japonesas de programas malditos.\n"}
            {"- Marie fue creada para dar un contrapunto poético a la historia, y sus poemas aparecen en los menús del juego.\n"}
            {"- El protagonista es el único capaz de usar múltiples Personas, reflejando su empatía y capacidad de conectar con todos.\n"}
            {"- Hay más de 200 Personas coleccionables y fusionables en el juego.\n"}
          </Text>

          </ScrollView>
        </View>
        </ImageBackground>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8080801e',
  },
  background: {
    flex: 1,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20, 
  },
  item: {
    backgroundColor: '#ffe600ff',
    color: '#000000ff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000ff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitleRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFFF',
    textAlign: 'center',
    backgroundColor: '#fde400ff',
    borderRadius: 10,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000000ff',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 15,
    padding: 10,
  },
  textRed: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fffb00ff',
    borderRadius: 10,
  },
});