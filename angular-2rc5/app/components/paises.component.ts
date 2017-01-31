import { Component } from '@angular/core';

@Component({
    selector: 'paises',
    template: `
    <h2>Paises {{prueba}}</h2>
    <ul>
       <li>España</li>
       <li>Mexico</li>
       <li>Colombia</li>
    </ul>      
    `
})
export class PaisesComponent {
    
}