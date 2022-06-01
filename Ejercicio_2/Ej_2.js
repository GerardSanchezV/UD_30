console.log('Hola Mundo!');
console.log('Soy el primer script');
// Se obtiene el párrafo por ID.
let campoParrafo = document.getElementsByClassName('parrafo');
// Al haber solo un párrafo es la posición 0.
console.log(campoParrafo);
// Se setea un valor en el párrafo.
campoParrafo[0].innerHTML = "Soy el primer párrafo";
// Se crea un mensaje en una variable.
let mensaje = "Por favor actualice su navegador para soportar javascript.";
alert(mensaje);
// Se crea un mensaje para incluir carácteres especiales.
let mensaje2 = `Hola Mundo!\nQué fácil es incluir 'comillas simples'\ny "comillas dobles"`;
alert(mensaje2);