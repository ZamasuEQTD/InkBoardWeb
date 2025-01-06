import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RegistrarseDialogComponent } from '../../../auth/registrarse-dialog/registrarse-dialog.component';
@Component({
  selector: 'app-drawer-button',
  imports: [
    DrawerModule,
    MenuModule,
],
  templateUrl: './drawer-button.component.html',
  styleUrl: './drawer-button.component.css',
})
export class DrawerButtonComponent {
  public show :boolean = false;

  @ViewChild("drawer") drawerRef!: ElementRef;

  items: MenuItem[] = [{
    label: 'Seguidos  '
  }]


  private overlayRef?: OverlayRef;

  private overlay : Overlay = inject(Overlay);


  toggle():void {
    this.show = !this.show;

    if(this.show){
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
  }


  test(): void {
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

    var a = this.overlayRef.attach(portal);

    // Cerrar el overlay al hacer clic fuera
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef!.dispose();
    });
  }
}
