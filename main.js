// var reloquito;

// function papacho() {
//     reloquito = 5;
//         console.log(reloquito);
// }

// function prompt() {
//     var nombre;
//     var edad;
//     nombre=prompt('Ingrese su nombre:','');
//     edad=prompt('Ingrese su edad:','');
//     document.write('Hola ');
//     document.write(nombre,',<b2r>');
//     document.write(' asi que tienes ');
//     document.write(edad);
//     document.write(' años');
// }    
function estructuraSecuencial(){
    var valor1;
    var valor2;
    valor1=prompt('Ingrese primer número:','');
    valor2=prompt('Ingrese segundo número','');
    var suma=parseInt(valor1)+parseInt(valor2);
    var producto=valor1*valor2;
    document.write('La suma es ');
    document.write(suma);
    document.write('<br>');
    document.write('El producto es ');
    document.write(producto);
  }
  estructuraSecuencial();