function esUnNumero(valor) {
  return typeof valor === "number" && !isNaN(valor);

}

export{ esUnNumero}

function esMayorEdad(edad) {
  return edad >= 18;

}

export{ esMayorEdad }