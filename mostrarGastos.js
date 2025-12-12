import fs from "fs";

const ruta = "./datos.json";

export const mostrarGastos = () => {   

    let cantidadGastos = JSON.parse(fs.readFileSync(ruta, "utf8"));
    let totalAcumulado = 0;

    for ( let i = 0; i < cantidadGastos.length; i++) {
      console.log(`                                                   `);
      console.log(`Id: ${cantidadGastos[i].id}`);
      console.log(`Fecha: ${cantidadGastos[i].fecha.año}/${cantidadGastos[i].fecha.mes}/${cantidadGastos[i].fecha.dia}`);
      console.log(`Valor: ${cantidadGastos[i].total}`);
      console.log(`Concepto: ${cantidadGastos[i].descripcion}`);
      console.log("---------------------------------------");

      let total = parseInt(cantidadGastos[i].total);
      totalAcumulado += total;
    }
    
    if (cantidadGastos.length === 0) {
        console.log(`Tienes ${cantidadGastos.length} gastos durante el mes`);
    } else if (cantidadGastos.length === 1) {
        return `Tienes ${cantidadGastos.length} gasto durante el mes`;
    } else if (cantidadGastos.length >= 2) {
        console.log( `Tienes ${cantidadGastos.length} gastos durante el mes`);
    }

    console.log(`El total de esos gastos es: ${totalAcumulado}`);

}
