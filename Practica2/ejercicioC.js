const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

let personaLuis = personas.find(function(p) {
  return p.nombre === "Luis";
});
console.log("Encontrado:", personaLuis);

personas.forEach(function(p) {
  console.log(p.nombre + " tiene " + p.edad + " años");
});

let totalEdades = personas.reduce(function(suma, p) {
  return suma + p.edad;
}, 0);

console.log("La suma de todas las edades es:", totalEdades);
