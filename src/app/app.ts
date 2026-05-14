import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Cuerpo } from "./cuerpo/cuerpo";
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Cuerpo, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo: string = "Hola Mundo con Angular"
}
