import fs from "fs";

export const buscarAño = (busqueda) => {

  let encontrarGasto = JSON.parse(fs.readFileSync("./datos.json", "utf8"));
  let año = parseInt(busqueda.año);
  let totalAcumulado = 0; //Acumulador inicia en 0

  let mostrarGastosAño = encontrarGasto.filter(gasto => gasto.fecha.año === año);

  if (mostrarGastosAño.length === 0) {
    console.log("No se encontraron gastos relacionados con el año actual...");
    return [];
  } else {
    for (let i = 0; i<mostrarGastosAño.length; i++) {
        console.log(`                                                   `);
        console.log(`Fecha: ${mostrarGastosAño[i].fecha.año}/${mostrarGastosAño[i].fecha.mes}/${mostrarGastosAño[i].fecha.dia}`);
        console.log(`Total: ${mostrarGastosAño[i].total}`);
        console.log(`Categoria: ${mostrarGastosAño[i].categoria}`);
        console.log(`Descripcion: ${mostrarGastosAño[i].descripcion}`);
        console.log(`--------------------------------------------------`);

        var total = parseInt(mostrarGastosAño[i].total); //Asignación contador al acumulado
        totalAcumulado += total;  //Suma de gastos
        
    }

    console.log(totalAcumulado);
  }
  
}

export const buscarCategoria = (busqueda) => {

  let encontrarGasto = JSON.parse(fs.readFileSync("./datos.json", "utf8"));
  let mostrarGastosCategoria = encontrarGasto.filter(gasto => gasto.categoria === busqueda.categoria);
  let totalAcumulado = 0;

  if (mostrarGastosCategoria.length === 0) {
    console.log("No se encontraron gastos relacionados a la categoria seleccionada...");
    return [];
  } else {
    for (let i = 0; i<mostrarGastosCategoria.length; i++) {
        console.log(`                                                   `);
        console.log(`Fecha: ${mostrarGastosCategoria[i].fecha.año}/${mostrarGastosCategoria[i].fecha.mes}/${mostrarGastosCategoria[i].fecha.dia}`);
        console.log(`Total: ${mostrarGastosCategoria[i].total}`);
        console.log(`Categoria: ${mostrarGastosCategoria[i].categoria}`);
        console.log(`Descripcion: ${mostrarGastosCategoria[i].descripcion}`);
        console.log(`--------------------------------------------------`);

        let total = parseInt(mostrarGastosCategoria[i].total);
        totalAcumulado += total;
    }

    console.log(`El total de gastado hasta ahora es: ${totalAcumulado}`);
  }
}

export const buscarValor = (valor) => {

  let encontrarGasto = JSON.parse(fs.readFileSync("./datos.json", "utf8"));
  let mostrarGastosValor = encontrarGasto.filter(gasto => gasto.total === valor.total);
  let valorAcumulado = 0;

  if (mostrarGastosValor.length === 0) {
    console.log("No se encontraron gastos relacionados a la categoria seleccionada...");
    return [];
  } else {
      for (let i = 0; i<mostrarGastosValor.length; i++) {
        console.log(`                                                   `);
        console.log(`Fecha: ${mostrarGastosValor[i].fecha.año}/${mostrarGastosValor[i].fecha.mes}/${mostrarGastosValor[i].fecha.dia}`);
        console.log(`Total: ${mostrarGastosValor[i].total}`);
        console.log(`Categoria: ${mostrarGastosValor[i].categoria}`);
        console.log(`Descripcion: ${mostrarGastosValor[i].descripcion}`);
        console.log(`--------------------------------------------------`);

        let total = parseInt(mostrarGastosValor[i].total);
        valorAcumulado += total;
    }

    console.log(valorAcumulado);
  }
}
