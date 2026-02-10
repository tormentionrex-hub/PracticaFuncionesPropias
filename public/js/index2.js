//Sumar y restar
import{sumar, restar} from "./index.js"

console.log("probando la funcion");

let a = 20

let b = 30

console.log("suma de", a, "y", b , "es igual a:", sumar(a, b));

console.log("resta de", b, "y", a, "es igual a:", restar(b,a) );


//AreaCuadrado y Rectangulo
import { areaCuadrado, areaRectangulo } from "./area.js";

console.log("probando la funcion de area");

let lado = 4

console.log("Area cuadrado (lado 4):", areaCuadrado(lado));

let base = 5

let altura = 3

console.log("Área rectángulo (base 5, altura 3):", areaRectangulo(base,altura));

//validaciones

import { esUnNumero, esMayorEdad } from "./validaciones.js";

console.log("probando las funciones de validación");

let valor1 = 10;
let valor2 = "hola";

console.log(valor1, "¿es un numero?", esUnNumero(valor1));
console.log(valor2, "es un número?", esUnNumero(valor2));

let edad1 = 20;
let edad2 = 15;

console.log("Edad", edad1, "es mayor de edad?", esMayorEdad(edad1));
console.log("Edad", edad2, "es mayor de edad?", esMayorEdad(edad2));

//Usuarios

import { mostrarUsuario } from "./usuario.js";

console.log("probando la función de usuario");
mostrarUsuario();

// Conversiones

import { metrosAKilometros } from "./conversiones.js";

console.log("probando conversiones");

let metrosUno = 1500;
let metrosDos = 300;

console.log(metrosUno, "metros son", metrosAKilometros(metrosUno), "km");
console.log(metrosDos, "metros son", metrosAKilometros(metrosDos), "km");

