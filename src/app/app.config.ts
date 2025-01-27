import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';


import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { ApiUrlInterceptor } from './features/shared/interceptors/api-url-interceptor';
import { TokenInterceptor } from './features/shared/interceptors/token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.my-app-dark'
            }
        }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: "BASE_API_URL", useValue: environment.api
    },
    {provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},

]
};
