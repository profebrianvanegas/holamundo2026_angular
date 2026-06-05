import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  imports: [],
  templateUrl: './card-producto.html',
})
export class CardProducto {
  producto = input.required<any>();//Agregar la Interfaz Producto

  agregarAlCarrtio = output<void>();//Emite el evento al padre

}
