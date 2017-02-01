import { Component } from '@angular/core';

@Component({
    selector: 'mi-formluario',
    templateUrl: 'app/views/mi-formulario.component.html'
})
export class MiFormularioComponent {

    public enviado = false;
    public categorias = ['Acción', 'Terror', 'Comedia', 'Aventura'];
    public pelicula = { 'titulo': '', 'categoria': '' };

    onSubmit(){
        this.enviado = true;
    }
}