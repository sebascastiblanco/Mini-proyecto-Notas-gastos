import { idAutomatico, datosId } from "./creacionId.js";
import { agregar } from "./agregarNotas.js";
import { mostrarGastos } from "./mostrarGastos.js";
import { buscar } from "./buscarNotas.js";
import fs from "fs";


let notas = JSON.parse(fs.readFileSync("./datos.json", "utf8", (err, datos) => {
    if (err) {
        console.error("No se pueden visualizar los gastos");
        return;
    }
    console.log(datos);
}));
/*
agregar(idAutomatico, datosId, notas);

console.log(mostrarGastos());
*/
console.log(buscar());

