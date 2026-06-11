import { Component, input, output } from '@angular/core';
import { Producto } from '../models/producto.model';

interface Carrito {
  precio: number;
}

@Component({
  selector: 'app-card-producto',
  imports: [],
  templateUrl: './card-producto.html',
})
export class CardProducto {
  producto = input.required<Producto>();//Agregar la Interfaz Producto

  agregarCarrito = output<Carrito>();//Emite el evento al padre

  agregarAlCarrito(producto: Producto):void {
    this.agregarCarrito.emit({
      precio: producto.precio
    });
  }
}
