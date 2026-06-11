import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CustomerSection } from './components/customer-section/customer-section';
import { ProjectListPage } from './components/projects/project-list-page/project-list-page';

export const routes: Routes = [
  //Ruta principal (Langing)
  { path: '', component: Home },

  // Página de clientes
  { path: 'clientes', component: CustomerSection },

  // Catálogo completo de proyectos
  { path: 'proyectos', component: ProjectListPage },

  // Redirigit si no existe la URL
  { path: '**', redirectTo: '' },
];
