import { fecha } from "./fecha.js";
import fs from "fs";

export const agregar = (funcionId, datos, notas) => {
  
  let agregarNota = {
    id: funcionId(datos), 
    fecha: fecha(),
    total: 300000,
    descripcion: "Pago Celular"
  };

  let agregarNota2 = {
    id: funcionId(datos), 
    fecha: fecha(),
    total: 700000,
    descripcion: "Pago Moto"
  }

  notas.push(agregarNota, agregarNota2);

  fs.writeFileSync("datos.json", JSON.stringify(notas, null , 2), (err) => {
    if (err) throw err;
  });
}


