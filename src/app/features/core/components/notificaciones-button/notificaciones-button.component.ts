import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, ElementRef, inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogHeaderComponent } from "../../../shared/components/dialog-header/dialog-header.component";
import { DialogRef } from '@angular/cdk/dialog';
import { NotificacionComponent } from "../../../notificaciones/components/notificacion/notificacion.component";

@Component({
  selector: 'app-notificaciones-button',
  imports: [DialogHeaderComponent, NotificacionComponent],
  templateUrl: './notificaciones-button.component.html',
  styleUrl: './notificaciones-button.component.css',
})
export class NotificacionesButtonComponent {
  overlay = inject(Overlay)

  viewRef = inject(ViewContainerRef);

  @ViewChild('notificacionesRef') notificacionsRef! : TemplateRef<any>;

  @ViewChild('buttonRef') button !: ElementRef<HTMLButtonElement>


  private ref!: OverlayRef;

  show() : void {
    const position =  this.overlay.position().flexibleConnectedTo(this.button).withPositions([
      {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
      }
    ])


    this.ref = this.overlay.create({
      positionStrategy : position,
      hasBackdrop: true,
    })

    this.ref.backdropClick().subscribe(() => {
      this.ref.dispose()
    });

    const portal = new TemplatePortal(this.notificacionsRef, this.viewRef);


    this.ref.attach(portal);
  }

  close() :void {
    this.ref.dispose()
  }
}
