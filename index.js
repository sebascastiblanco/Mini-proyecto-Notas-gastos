import { idAutomatico, datosId } from "./creacionId.js";
import { agregar } from "./agregarNotas.js";
import { mostrarNotas } from "./mostrarNotas.js";
import { buscar } from "./buscarNotas.js";

//array para agregar notas y funcion
export const notas = [];


agregar(idAutomatico, datosId, notas);

console.log(notas);

mostrarNotas(notas);

console.log(buscar(notas));
