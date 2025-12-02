import fs from "fs";

export const agregar = (funcionId, datos, notas) => {
  
  let agregarNota = {
    id: funcionId(datos), 
    fecha: "30/11/2025",
    total: 300000,
    descripcion: "Pago Celular"
  };

  notas.push(agregarNota);

  fs.writeFileSync("datos.json", JSON.stringify(notas, null , 2), (err) => {
    if (err) throw err;
  });
}


