import { Component } from '@angular/core';

interface Mascota {
  raza: string,
  nombre: string,
  edad: number
}

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.html',
})
export class Directivas {
  isLoggen: boolean = true;

  nombre: string = "Brian"

  lenguajes: any[] = ['Python', 'PHP', 'JavaScript', 'TipeScript', 'JAVA', 'C#', 'C++'];

  misMascotas: Mascota[] = [
    {raza: 'Caballo', nombre: 'Tornado', edad: 50},
    {raza: 'Labrador', nombre: 'Firulais', edad: 5},
    {raza: 'Buldog', nombre: 'Bella', edad: 10},
    {raza: 'Coballo', nombre: 'Charly', edad: 5},
    {raza: 'Pitbull', nombre: 'Medel', edad: 8},
    {raza: 'Dalmata', nombre: 'Manchas', edad: 5}
  ]

}
