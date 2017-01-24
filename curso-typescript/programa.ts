module Tienda {
    export class Ropa {
        constructor(public titulo: string) {
            alert(titulo);
        }
    }

    export class Informatica {
        constructor(public titulo: string) {
            alert('Tienda de tecnología: ' + titulo);
        }
    }
}

import Informatica = Tienda.Informatica;
let cargar_informatica = new  Informatica('Super tienda');

function arranque(lanzar: string) {
    return function (target: Function) {
        target.prototype.lanzamiento = function (): void {
            alert(lanzar);
        }
    }
}

@arranque('Lanzamiento del curso de NodeJS y Angular 2')
class Programa {
    public nombre: string;
    public version: number;

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getVersion() {
        return this.version;
    }

    setVersion(version: number) {
        this.version = version;
    }
}

var programa = new Programa();
programa.lanzamiento();

class EditorVideo extends Programa {
    public timeline: number;

    getTimeLine() {
        return this.timeline;
    }

    setTimeLine(timeline: number) {
        this.timeline = timeline;
    }

    getAllData(): string {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    }
}

var editor = new EditorVideo();
editor.setVersion(8);
editor.setNombre("Camtasia studio");
editor.setTimeLine(4000);

console.log(editor.getAllData());

// Lógica del formulario

var programas = [];

function guardar() {
    var txtNombre = (<HTMLInputElement>document.getElementById("nombre"));
    var nombre = txtNombre.value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);

    programas.push(programa);

    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    var listado = <HTMLElement>document.getElementById("listado");
    listado.innerHTML = list;

    txtNombre.value = "";
    txtNombre.focus();
}

setInterval(() => {
    console.log("hola");
}, 1000);
var frutas = [
    'Manzana',
    'Naranja',
    'Platano',
    'Pera'
];

var recorrer = frutas.map(fruta => {
    console.log(fruta);
    console.log(fruta.length);
});
