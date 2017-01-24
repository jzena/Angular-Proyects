function HolaMundo(nombre) {
    return "Hola mundo!! soy " + nombre;
}
var nombre = "José zeña";
var resultado = HolaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
// Variables y tipos
var nombre = "José zeña";
var edad = 28;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("dentro del if:" + a_1 + " - " + b);
}
console.log("fuera del if:" + a + " - " + b);
// funciones y tipado
function devuelveNumero(num) {
    return "Número devuelto: " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));
