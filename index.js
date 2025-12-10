import { idAutomatico, datosId } from "./creacionId.js";
import { agregar } from "./agregarNotas.js";
import { mostrarGastos } from "./mostrarGastos.js";
import { buscarAño, buscarCategoria, buscarValor } from "./buscarGastos.js";
import inquirer from "inquirer";
import fs from "fs";


let notas = JSON.parse(fs.readFileSync("./datos.json", "utf8", (err, datos) => {
    if (err) {
        console.error("No se pueden visualizar los gastos");
        return;
    }
    console.log(datos);
}));

inquirer
  .prompt([
    {
    type: 'list',
    name: 'opcion',
    message: 'Selecciona una opción: ',
    choices: ['Agregar gastos', 'Buscar gastos', 'Mostrar Gastos'],
    }
  ])
  .then(async ({ opcion }) => {

        if (opcion === 'Agregar gastos') {

            const respuestas = await inquirer.prompt([
                {   
                    name: 'total', 
                    message: 'Ingrese el valor del gasto: ',
                    validate: input => input.trim() !== '' || 'No puede estar vacio'
                },
                {
                    type: 'list',
                    name: 'categoria',
                    message: 'Seleccione la categoria del gasto: ',
                    choices: ['Comida', 'Transporte', 'Servicios', 'Entretenimiento', 'Mi esposa'],
                    validate: input => input.trim() !== '' || 'No puede estar vacio'
                },
                {   
                    name: 'descripcion', 
                    message: 'Ingrese el concepto del gasto: ',
                    validate: input => input.trim() !== '' || 'No puede estar vacio'
                }
            ]);

            agregar(idAutomatico, datosId, notas, respuestas);
            return;
        }

        if (opcion === 'Buscar gastos') {
            
            const respuestas = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'opcion',
                    message: 'Selecciona el metodo de busqueda',
                    choices: ['Año', 'Categoria', 'Valor']
                }
            ])
            .then(async({ opcion }) => {

                if (opcion === 'Año') {

                    const busqueda = await inquirer.prompt([
                        
                        {
                            name: 'año',
                            message: 'Ingrese el año que desea buscar:',
                            validate: input => input.trim() !== '' || 'No puede estar vacio'
                        }
                    ]);
                        buscarAño(busqueda);
                        return;
                }

                if (opcion === 'Categoria') {

                    const categoria = await inquirer.prompt([

                        {
                            type: 'list',
                            name: 'categoria',
                            message:  'Seleccione la categoria para buscar:',
                            choices: ['Comida', 'Transporte', 'Servicios', 'Entretenimiento', 'Mi esposa'],
                            validate: input => input.trim() !== '' || 'No puede estar vacio'
                        }
                    ]);
                    buscarCategoria(categoria); 
                    return;
                }

                if (opcion === 'Valor') {

                    const valor = await inquirer.prompt([

                        {
                            name: 'total',
                            message: 'Ingrese el valor para realizar busqueda:',
                            validate: input => input.trim() !== '' || 'No puede estar vacio'
                        }
                    ]);
                    buscarValor(valor);
                    return;
                }
            });
        }

        if (opcion === 'Mostrar Gastos') {

            const mostrar = await inquirer.prompt([

                {
                    name: 'mostrar'
                }
            ]);
            mostrarGastos();
            return;
        }
    
  });
