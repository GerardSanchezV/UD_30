var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',  'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

var dni = prompt("Introduce un número de DNI (sin letra):");

var letraDni = prompt("Introduce la letra del DNI (en mayúsculas):");

if (dni > 99999999 || dni < 0) {
    alert("Introduce un número válido");
}
function comprobarLetraDni(numeroDNI, letra) {
    var residuo = numeroDNI % 23;
    return letra[residuo];
}
if (comprobarLetraDni(dni, letras) == letraDni) {
    alert("DNI correcto");
} else {
    alert("DNI incorrecto")
}