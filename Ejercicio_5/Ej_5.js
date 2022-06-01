var numero1 = 5;
var numero2 = 8;

if (numero1 > numero2) {
    console.log(numero1 + " es mayor que " + numero2);
} else {
    console.log(numero1 + " no es mayor que " + numero2);
}

if (numero2 >= 1) {
    console.log(numero2 + " es positivo");
} else {
    console.log(numero2 + " es negativo");
}

if (numero1 < 0 || numero1 == 0) {
    console.log(numero1 + " es negativo o distinto de " + 0);
} else {
    console.log(
        numero1 + " no es negativo o distinto de " + 0
    );
}

for (numero1; numero1 < numero2; numero1++) {
    console.log(
        "Incrementar en 1 unidad el valor de numero1: " + numero1 + " no lo hace mayor " +
        "que numero2: " + numero2
    );
}