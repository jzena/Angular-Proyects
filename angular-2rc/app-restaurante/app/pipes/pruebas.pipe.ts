import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "pruebas" })
export class PruebasPipe implements PipeTransform {
    transform(value: number, por: number): string {
        let porv = parseInt(por);
        let valuev = parseInt(value);

        let result = "La multiplicación: " + valuev + " x " + porv + " = " + (valuev * porv);

        return  result;
    }
}