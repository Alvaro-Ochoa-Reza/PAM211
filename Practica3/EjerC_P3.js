function simularPeticion(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Datos recibidos correctamente');
        }, 5000);
    });
}    
async function obtenerDatos() {
    try {
        const respuesta = await simularPeticion();
        console.log("Procesando...");
        console.log("Resultado de la petición: ", respuesta);
    } catch(error) {
        console.log("Error", error.message);
    }
}
obtenerDatos();