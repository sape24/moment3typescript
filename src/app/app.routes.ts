import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Convert } from './convert/convert';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'convert', component: Convert},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '404', component: NotFound},
    {path: '**', component: NotFound},
];
