import { fecha } from "./fecha.js";
import fs from "fs";

export const agregar = (funcionId, datos, notas, respuestas) => {
  
  let agregarNota = {
    id: funcionId(datos), 
    fecha: fecha(),
    total: respuestas.total,
    categoria: respuestas.categoria,
    descripcion: respuestas.descripcion
  };

  notas.push(agregarNota);

  fs.writeFileSync("datos.json", JSON.stringify(notas, null , 2));

  console.log('✅ Gasto agregado correctamente');
}


