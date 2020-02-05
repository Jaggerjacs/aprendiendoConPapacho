// Defino la funcion lala()
function lala() {
    // Declaro la variable producto
    var producto;

    // Asigno el valor que devuelve la funcion prompt(), en la variale producto
    producto = prompt('hola, tirame una', '');

    // Creo elementos o texto plano en el DOM (esto queda dentro de la etiqueta <body>)
    document.write('el producto es ');
    document.write(producto);
}

// llamo a la funcion lala()
lala();
