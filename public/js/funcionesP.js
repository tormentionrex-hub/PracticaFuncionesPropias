// mayusculas
let palabras = ["hola", "javascript", "casa"];

// uso el .map para convertir a mayúsculas
let palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());

// Mostrar resultado
console.log(palabrasMayusculas);




//Precios

const precios = [100, 250, 400, 80];
const descuento = 15;

const preciosConDescuento = precios.map(precio => {
  let unoPorCiento = precio / 100;        // cuánto vale el 1%
  let montoDescuento = unoPorCiento * descuento; // 15%
  let precioFinal = precio - montoDescuento;     // precio con descuento
  return precioFinal;
});

console.log(preciosConDescuento);



//edades mayores o iguales a 18

const edades = [18, 25, 12, 40, 16, 30]

const edadesMayores = edades.filter(edad =>{
    return edad >= 18;
    
})

console.log("Estas edades si son mayores de edad:", edadesMayores);

//Roles 

const usuarios = [
  { nombre: "Barry", rol: "admin" },
  { nombre: "Gonzalez", rol: "usuario" },
  { nombre: "Steven", rol: "admin" }
];

const admins = usuarios.filter(usuario => {
  return usuario.rol === "admin";
});

console.log(admins);


//numero mayor

const numeros = [5, 3, 8, 2];

const mayor = numeros.reduce((acumulador, numero) => {   
    // ? = if 
    // : = else
  return acumulador > numero ? acumulador : numero;
});

console.log(mayor);


// Operador ternario en JavaScript
// Es una forma corta de escribir un if / else

// Sintaxis:
// condicion ? valorSiVerdadero : valorSiFalso

// Ejemplo:
const mayorEj = a > b ? a : b;
// Si a es mayor que b → se usa a
// Si a no es mayor que b → se usa b

// Equivalente a:
// if (a > b) {
//   return a;
// } else {
//   return b;
// }


