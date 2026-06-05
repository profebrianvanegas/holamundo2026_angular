import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
})
export class Signal {
  cantidad = signal<number>(0);
  stock: number = 5;

  sumarAlCarrito(): void {
    this.cantidad.update((val)=> val + 1);
  }

  total = computed(()=> { return this.cantidad() * 1500})

  constructor(){
    effect(()=> {
      if(this.cantidad() > this.stock){
        alert('Stock insuficiente');
        this.cantidad.set(this.stock);
      }
    })
  }
}
