
export const mostrarNotas = (notas) => {   

  for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
  }

    if (notas.length === 0) {
        console.log(`Tienes ${notas.length} notas guardadas`);
    } else if (notas.length === 1) {
        console.log(`Tienes ${notas.length} nota guardada`);
    } else if (notas.length >= 2) {
        console.log(`Tienes ${notas.length} notas guardadas`);
    }
}

