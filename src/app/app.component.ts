import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { DialogService } from 'primeng/dynamicdialog';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RegistrarseDialogComponent } from './features/auth/registrarse-dialog/registrarse-dialog.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    providers:[DialogService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'InkBoard';

  private overlayRef?: OverlayRef;

  private overlay : Overlay = inject(Overlay);

  a () : void {

this.overlayRef = this.overlay.create({
  hasBackdrop: true, // Fondo oscuro
  panelClass : 'z-[10000000]',
  positionStrategy: this.overlay
    .position()
    .global()
    .centerHorizontally()
    .centerVertically(), // Centrar el overlay
});

const portal = new ComponentPortal(RegistrarseDialogComponent);
 var a =   this.overlayRef.attach(portal);
  a.instance.closeOverlay.subscribe(() => this.overlayRef!.dispose());



// Cerrar el overlay al hacer clic fuera
  this.overlayRef.backdropClick().subscribe(() => {
    this.overlayRef!.dispose();
  });
}

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
  ngOnInit(): void {
    this.a()
  }
}
