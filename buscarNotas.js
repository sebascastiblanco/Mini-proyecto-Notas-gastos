import fs from "fs";

export const buscar = () => {

  let encontrarGasto = JSON.parse(fs.readFileSync("./datos.json", "utf8"));

  let mostrar = encontrarGasto.filter(gasto => gasto.fecha.año === 2025);

  if (mostrar.length === 0) {
    console.log("No se encontraron gastos relacionados con la fecha actual...");
    //return [];
  } else {
    return mostrar;
  }
  
  //buscarNotas.find(notas => notas.nota === 50);
}
