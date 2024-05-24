/**
 * Esta función recibe dos operandos y los inicializa a cero en caso de no llegar valores.
 * @param {*} a 
 * @param {*} b 
 * @returns a/b
 */
const Dividir = (a=0,b=1) =>{
    if(b == 0)
        return 'No se puede dividir por cero';
    
    return a/b;
   }
   
   module.exports = Dividir;