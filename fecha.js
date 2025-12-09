
export const fecha = () => {
    
    const dia = new Date().getDate();
    const mes = new Date().getMonth() + 1;
    const año = new Date().getFullYear();
    
    return { año, mes, dia };
}