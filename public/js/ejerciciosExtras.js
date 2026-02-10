const usuarios = [
  { nombre: "Admin1", permisos: ["crear", "editar", "eliminar"] },
  { nombre: "User1", permisos: ["ver"] },
  { nombre: "Admin2", permisos: ["crear", "editar"] },
  { nombre: "Invitado", permisos: [] }
];

const usuariosConPermisos = usuarios.filter(
  usuario =>
    usuario.permisos.includes("crear") &&
    usuario.permisos.includes("editar")
);

console.log(usuariosConPermisos);

// includes() se usa para verificar si un arreglo contiene un valor específico
// Devuelve true si el valor existe, false si no

// En este ejercicio, cada usuario tiene un arreglo llamado "permisos"

// usuario.permisos.includes("crear")
// → revisa si el usuario tiene el permiso "crear"

// usuario.permisos.includes("editar")
// → revisa si el usuario tiene el permiso "editar"

// El operador && (AND) significa "ambas condiciones deben cumplirse"
// Solo si el usuario tiene "crear" Y "editar", el resultado será true

// filter() filtra en el nuevo arreglo solo los elementos que devuelvan true en este caso admin1 y admin2



const productos = [
{ nombre: "Mouse", precio: 20 },
{ nombre: "Teclado", precio: 50 },
{ nombre: "Mouse", precio: 25 },
{ nombre: "Monitor", precio: 200 }
];

const productosNoRepetidos = productos.filter(
    producto => productos.filter(                                         // Por cada producto del arreglo principal, aplicamos una función para filtrarlo
        productoInterno => productoInterno.nombre === producto.nombre    // "productors.filter(productoInterno =>)" Esto recorre nuevamente todos los productos y compara las variables nombre para contar repeticiones
    ).length === 1                                                        // length cuenta cuántas veces aparece ese nombre
                                                                          // === 1 significa que el nombre NO se repite osea que debe ser exactamente igual a 1 en el caso de que fuera 2 entonces aparecerian las variables de nombre que se repitan en este caso mouse

)

console.log(productosNoRepetidos);
