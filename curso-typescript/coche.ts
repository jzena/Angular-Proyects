interface CocheBase {
    getModelo(): string;
    getVelocidad(): number;
}

class Coche implements CocheBase {
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo: any = null) {
        this.velocidad = 0;
        this.color = "Blanco";
        if (modelo == null) {
            this.modelo = "BMW Genérico";
        }
        else {
            this.modelo = modelo;
        }
    }
    public getModelo(): string {
        return this.modelo;
    }
    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public getColor() {
        return this.color;
    }
    public setColor(color: string) {
        this.color = color;
    }

    public getVelocidad(): number {
        return this.velocidad;
    }
    public acelerar() {
        this.velocidad++;
    }
    public frenar() {
        this.velocidad--;
    }
}

var coche = new Coche("Renault Clio");
var coche2 = new Coche();
var coche3 = new Coche();

coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("El modelo del coche 1 es: " + coche.getModelo());
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());

coche.frenar();
console.log("La velocidad del coche 1 después de frenar es: " + coche.getVelocidad());

// coche2.setColor("AZUL");
// coche3.setColor("VERDE");
// console.log("El color del coche 1 es: " + coche2.getColor());
// console.log("El color del coche 1 es: " + coche3.getColor());