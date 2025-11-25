
export const buscar = (buscarNotas) => {

  let notaBuscada = buscarNotas.find(notas => notas.nota === 50);

  return notaBuscada;
}
