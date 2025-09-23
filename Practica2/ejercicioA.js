const persona = {
  nombre: "Alvaro",
  edad: 21,
  direccion: {
    ciudad: "Querétaro",
    pais: "México"
  }
};

const { nombre, edad, direccion: { ciudad, pais } } = persona;

console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ", " + pais + ".");
