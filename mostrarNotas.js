import fs from "fs";

const ruta = "./datos.json";

export const mostrarNotas = () => {   

    let cantidadNotas = JSON.parse(fs.readFileSync(ruta, "utf8"));

    for ( let i = 0; i < cantidadNotas.length; i++) {
      console.log(cantidadNotas[i].fecha);
      console.log(cantidadNotas[i].total);
      console.log(cantidadNotas[i].descripcion);
    }
    
    if (cantidadNotas.length === 0) {
        console.log(`Tienes ${cantidadNotas.length} notas guardadas`);
    } else if (cantidadNotas.length === 1) {
        console.log(`Tienes ${cantidadNotas.length} nota guardada`);
    } else if (cantidadNotas.length >= 2) {
        console.log(`Tienes ${cantidadNotas.length} notas guardadas`);
    }

    return cantidadNotas;
  
  }


