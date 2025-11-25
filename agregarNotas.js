
export const agregar = (funcionId, datos, notas) => {

    let agregarNota = {
    id: funcionId(datos), 
    nombre: "Jose Fernando",
    nota: 50, 
    comentario:'Excelente'
  };

  let agregarNota2 = { 
    id: funcionId(datos), 
    nombre: "Andres Felipe", 
    nota: 40, 
    comentario:'Debes mejorar' 
  };

  
  let agregarTotalNotas = notas.push(agregarNota, agregarNota2);
  
  return agregarTotalNotas;
}


