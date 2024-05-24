console.clear();
/**
 * Crear un archivo calculadora.js en el cual deberemos requerir los cuatros archivos
hechos con anterioridad.
 */
const Sumar = require('./src/componentes/sumar');
const Restar = require('./src/componentes/restar');
const Mutiplicar = require('./src/componentes/multiplicar');
const Dividir = require('./src/componentes/dividir');

//probamos la funcion
/**
 * Ejecutar la función que permite sumar y la función que permite restar, pasando como argumentos dos números cualesquiera. Mostrar en consola los resultados.
 */
console.log("La Suma de 5 + 2 es :" + Sumar(5,2));

/**
 * Ejecutar la función que permite Restar, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado.
 */
console.log("La Resta de 5 - 2 es :" + Restar(5,2));

/**
 * Ejecutar la función que permite multiplicar, pasando ahora como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.
 */
//-->el segundo parametro, en caso de no recibir algo, se pasa por defecto = 1
console.log("La Multiplicación  de 5 * 2 es :" + Mutiplicar(5,2));

/**Ejecutar la función que permite dividir, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado. */
//-->el segundo parametro, en caso de no recibir algo, se pasa por defecto = 1
console.log("La Division de 5 / 2 es :" + Dividir(5,2));

/**
 * Ejecutar la función que permite dividir, pasando ahora como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.
 */
console.log("La Division de 5 / 0 es :" + Dividir(5,0));