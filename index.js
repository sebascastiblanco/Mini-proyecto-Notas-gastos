import { idAutomatico, datosId } from "./creacionId.js";
import { agregar } from "./agregarNotas.js";
import fs from "fs";
import { mostrarNotas } from "./mostrarNotas.js";
/*import { buscar } from "./buscarNotas.js";
*/

let notas = JSON.parse(fs.readFileSync("./datos.json", "utf8", (err, datos) => {
    if (err) {
        console.error("No se pueden visualizar las notas");
        return;
    }
    console.log(datos);
}));


agregar(idAutomatico, datosId, notas);

console.log(mostrarNotas());

