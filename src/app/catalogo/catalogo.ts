import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
})
export class Catalogo {

  // Datos que luego vendrán de la API de Laravel
  productos = [
    { id: 1, nombre: "Laptop Pro 15", precio: 1200, stock: 5, imagen: "https://media.istockphoto.com/id/1954422116/photo/a-laptop-with-a-blank-screen-sits-on-a-stylish-wooden-desk-within-a-loft-style-interior-with.jpg?s=1024x1024&w=is&k=20&c=qQ3gVzlUAb8olbS6tx9XGmsZRHKyOTh6XdO_jsc9lPg=" },
    { id: 2,   nombre: "Mouse Gamer RGB", precio: 45, stock: 0, imagen: "https://cdn.pixabay.com/photo/2015/03/12/11/22/mouse-670002_1280.jpg" },
    { id: 3, nombre: "Monitor 4K 27\"", precio: 350, stock: 8, imagen: "https://media.istockphoto.com/id/1412872705/photo/video-on-demand-menu-on-tv.jpg?s=1024x1024&w=is&k=20&c=ENB1pmX_h7oXnvgFR4EsCB_ADl-WnMXaDmdE8iGsUR4=" },
    { id: 4, nombre: "Teclado Mecánico", precio: 80, stock: 12, imagen: "https://cdn.pixabay.com/photo/2024/10/30/10/53/ai-generated-9161446_1280.jpg" }
  ];
}
