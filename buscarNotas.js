import fs from "fs";

export const buscar = () => {

  let encontrarGasto = JSON.parse(fs.readFileSync("./datos.json", "utf8"));

  let mostrar = encontrarGasto.find(fecha => fecha.fecha === "03/12/2025"); 
  //buscarNotas.find(notas => notas.nota === 50);

  return mostrar;
}
