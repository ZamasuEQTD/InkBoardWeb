import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DialogHeaderComponent } from '../../../shared/components/dialog-header/dialog-header.component';
import { NotificacionComponent } from '../../../notificaciones/components/notificacion/notificacion.component';
import { Dialog } from '@angular/cdk/dialog';
import { NotificacionSkeletonComponent } from "../../../notificaciones/components/notificacion-skeleton/notificacion-skeleton.component";
import { NotificacionesDialogComponent } from '../../../notificaciones/components/notificaciones-dialog/notificaciones-dialog.component';
import { NotificacionesService } from '../../../notificaciones/serivces/notificaciones.service';

@Component({
  selector: 'app-notificaciones-button',
  imports: [DialogHeaderComponent, NotificacionComponent, NotificacionSkeletonComponent],
  templateUrl: './notificaciones-button.component.html',
  styleUrl: './notificaciones-button.component.css',
})
export class NotificacionesButtonComponent implements OnInit {

  notificacionesService = inject(NotificacionesService);

  dialog = inject(Dialog);

  ngOnInit(): void {
    if (!this.notificacionesService.initialized) {
      this.notificacionesService.init()
    }
  }

  show(): void {
    this.dialog.open(NotificacionesDialogComponent, {
      closeOnNavigation: true,
    });
  }
}
