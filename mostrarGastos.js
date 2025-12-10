import fs from "fs";

const ruta = "./datos.json";

export const mostrarGastos = () => {   

    let cantidadGastos = JSON.parse(fs.readFileSync(ruta, "utf8"));

    for ( let i = 0; i < cantidadGastos.length; i++) {
      console.log(`                                                   `);
      console.log(`Id: ${cantidadGastos[i].id}`);
      console.log(`Fecha: ${cantidadGastos[i].fecha.año}/${cantidadGastos[i].fecha.mes}/${cantidadGastos[i].fecha.dia}`);
      console.log(`Valor: ${cantidadGastos[i].total}`);
      console.log(`Concepto: ${cantidadGastos[i].descripcion}`);
      console.log("---------------------------------------");
    }
    
    if (cantidadGastos.length === 0) {
        return`Tienes ${cantidadGastos.length} gastos durante el mes`;
    } else if (cantidadGastos.length === 1) {
        return `Tienes ${cantidadGastos.length} gasto durante el mes`;
    } else if (cantidadGastos.length >= 2) {
        return `Tienes ${cantidadGastos.length} gastos durante el mes`;
    }

}
