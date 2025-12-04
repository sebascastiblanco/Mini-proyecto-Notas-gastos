export const datosId = ["Ab", "Ba", "Cb", "Bc", "Ca", "Ac"];

//Crear Id automatico para cada nota 
export const idAutomatico = (arrayId) => {
  let posicionesArray = arrayId.length;
  let seleccionar = Math.floor(Math.random() * posicionesArray);
  let nuevoId = Math.floor(Math.random() * 100) + 1;

  if (nuevoId % 2 === 0) {
    return  arrayId[seleccionar] + nuevoId + "PPP";
  } else {
    return  arrayId[seleccionar] + nuevoId + "OOO";
  }
  
 
}
