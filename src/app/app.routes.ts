import { Routes } from '@angular/router';
import { Tailwind } from './tailwind/tailwind';
import { Cuerpo } from './cuerpo/cuerpo';

export const routes: Routes = [
    {path: 'tailwind', component: Tailwind, title: 'Tailwind'},
    {path: 'inicio', component: Cuerpo, title: 'Inicio'}
];
