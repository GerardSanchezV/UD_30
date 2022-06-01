//Ejercicio 4:

//Array de valores diversos
var valores = [true, 5, false, "hola", "adios", 2];
//Ejercicio 4.1:

//Array de Strings
var arrayStrings = [];

//Bucle para guardar los strings de valores
for (i = 0; i < 6; i++) {
    if (typeof(valores[i]) == 'string') {
        arrayStrings.push(valores[i])
    }
}

//Variable para almacenar el string más grande
var max = "";

//Bucle para almacenar el string más grande
for (var j = 0; j < arrayStrings.length; j++) {
    if (arrayStrings[j].length > max.length) {
        max = arrayStrings[j];
    }
}

//Mensaje a mostrar por consola
console.log("\nEjercicio 4.1: El string mayor\n\nEl string más grande es: " + max + "\n");

//Ejercicio 4.2:

//Array para almacenar los booleanos
var booleans = [];

//Bucle para almacenar el elemento sólo si es booleano
for (k = 0; k < valores.length; k++) {
    if (typeof(valores[k]) == 'boolean') {
        booleans.push(valores[k])
    }
}

//Mostrar el valor original de los booleanos
console.log("\nEjercicio 4.2:\n\nValores booleanos originales: " + booleans);

//Bucle para modificar los valores
for (let index = 0; index < booleans.length; index++) {
    if (booleans[index] == true) {
        booleans[index] = false;
    } else {
        booleans[index] = true;
    }
}

//Mostrar los nuevos valores de los booleanos
console.log("Valores booleanos alterados: " + booleans);

//Ejercicio 4.3:

//Array para guardar los valores numéricos
var numeros = [];

//Bucle para almacenar los valores numéricos
for (var a = 0; a < 6; a++) {
    if (typeof(valores[a]) == 'number') {
        numeros.push(valores[a])
    }
}

//Mostrar por consola las operaciones y sus resultados
console.log("\nEjercicio 4.3: Resultado de operaciones matemáticas básicas:\n");
console.log("Suma: " + (numeros[0] + numeros[1]) + "\nResta: " + (numeros[0] - numeros[1]) + "\nMultiplicación: " + (numeros[0] * numeros[1]) + "\nDivisión: " + (numeros[0] / numeros[1]) + "\nResiduo: " + (numeros[0] % numeros[1]));
