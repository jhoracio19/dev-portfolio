import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CustomerSection } from './components/customer-section/customer-section';

export const routes: Routes = [
  //Ruta principal (Langing)
  { path: '', component: Home },

  // Página de clientes
  { path: 'clientes', component: CustomerSection },

  // Redirigit si no existe la URL
  { path: '**', redirectTo: '' },
];
