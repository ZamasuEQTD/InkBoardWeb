import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    providers:[],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InkBoard';

  constructor(private primeng: PrimeNG) {
    this.primeng.theme.set({
      preset: Aura,
          options: {
            darkModeSelector: '.my-app-dark',
              cssLayer: {
                  name: 'primeng',
                  order: 'tailwind-base, primeng, tailwind-utilities'
              }
          }
      })
  }

}
