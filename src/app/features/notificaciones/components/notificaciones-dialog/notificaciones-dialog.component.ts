import { Component, inject } from '@angular/core';
import { NotificacionComponent } from "../notificacion/notificacion.component";
import { NotificacionSkeletonComponent } from "../notificacion-skeleton/notificacion-skeleton.component";
import { NotificacionesService } from '../../serivces/notificaciones.service';
import { Notificacion } from '../../interfaces/notificacion.interface';
import { OverlayRef } from '@angular/cdk/overlay';
import { DialogRef } from '@angular/cdk/dialog';
import { DialogHeaderComponent } from "../../../shared/components/dialog-header/dialog-header.component";

@Component({
  selector: 'app-notificaciones-dialog',
  imports: [NotificacionComponent, NotificacionSkeletonComponent, DialogHeaderComponent],
  templateUrl: './notificaciones-dialog.component.html',
  styleUrl: './notificaciones-dialog.component.css',
})
export class NotificacionesDialogComponent {

  private notificacionesService = inject(NotificacionesService);

  private ref = inject(DialogRef)

  leer(){
    this.notificacionesService.leerTodas()
  }
  
  close(){
    this.ref.close();
  }

  get notificaciones(): Notificacion[] {
    return this.notificacionesService.notificaciones();
  }

  get cantidadDeNotificaciones(): number {
    return this.notificacionesService.cantNotificaciones();
  }

  get cargando(): boolean {
    return this.notificacionesService.cargandoNotificaciones()
  }
}
