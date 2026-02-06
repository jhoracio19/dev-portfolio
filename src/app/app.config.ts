import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router'; // <--- IMPORTANTE: Agregar estos imports

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),

    // Aquí es donde activamos la magia de la navegación
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled', // Permite que funcionen los links tipo #proyectos
        scrollPositionRestoration: 'enabled', // Te regresa arriba cuando cambias de página
      }),
      withViewTransitions(), // Hace que el cambio de página sea suave y moderno
    ),

    provideClientHydration(withEventReplay()),
  ],
};
