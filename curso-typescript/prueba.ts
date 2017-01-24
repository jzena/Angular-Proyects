function HolaMundo(nombre) {
    return "Hola mundo!! soy " + nombre;
}

var nombre = "José zeña";
var resultado = HolaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;

// Variables y tipos
var nombre: string = "José zeña";
var edad: number = 28;
var programador: boolean = true;
var langs: Array<string> = ["PHP", "JavaScript", "CSS"];

etiqueta.innerHTML = nombre + " - " + edad;

var a = 7;
var b = 12;

if (a === 7) {
    let a = 4;
    var b = 1;

    console.log("dentro del if:" + a + " - " + b);

}

console.log("fuera del if:" + a + " - " + b);

// funciones y tipado

function devuelveNumero(num: number): string {
    return "Número devuelto: " + num;
}

function devuelveString(texto: string): number {
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