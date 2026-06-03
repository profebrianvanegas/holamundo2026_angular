import { Routes } from '@angular/router';
import { Tailwind } from './tailwind/tailwind';
import { Cuerpo } from './cuerpo/cuerpo';
import { Directivas } from './directivas/directivas';
import { Catalogo } from './catalogo/catalogo';
import { Signal } from './signal/signal';

export const routes: Routes = [
    {path: 'tailwind', component: Tailwind, title: 'Tailwind'},
    {path: 'inicio', component: Cuerpo, title: 'Inicio'},
    {path: 'directivas', component: Directivas, title: 'Directivas'},
    {path: 'catalogo', component: Catalogo, title: 'Catalogo'},
    {path: 'signal', component: Signal, title: 'Signal'}
];
