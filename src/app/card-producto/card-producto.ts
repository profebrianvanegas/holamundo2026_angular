import { Component, input, output } from '@angular/core';
import { Producto } from '../models/producto.model';

//Elimino la interfaz carrito para hacer funcionar el carrito en catalogo
//Elijo mejor devolver el producto completo

/* interface Carrito {
  precio: number;
} */

@Component({
  selector: 'app-card-producto',
  imports: [],
  templateUrl: './card-producto.html',
})
export class CardProducto {
  // ========== INPUT: Recibe datos del padre ==========
  // input.required<tipo>() crea un input obligatorio
  // El componente padre nos pasará el producto mediante property binding
  // [producto]="producto" en el template del padre
  producto = input.required<Producto>();

  // ========== OUTPUT: Emite eventos al padre ==========
  // output() crea un EventEmitter para comunicar eventos al componente padre
  // Cuando el usuario hace clic en "Agregar", emitimos el producto hacia arriba
  agregarCarrito = output<Producto>();

  /**
   * Método que se ejecuta al hacer clic en el botón
   * Emite el producto actual hacia el componente padre (Catálogo)
   */
  agregarAlCarrito():void {
    // Emito el producto completo al padre
    // El padre está escuchano este evento con (agregarCarrito)="sumarAlCarrito($event)"
    this.agregarCarrito.emit(this.producto());
  }
}