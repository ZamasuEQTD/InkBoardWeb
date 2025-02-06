import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  ElementRef,
  inject,
  signal,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { DialogHeaderComponent } from '../../../shared/components/dialog-header/dialog-header.component';
import { NotificacionComponent } from '../../../notificaciones/components/notificacion/notificacion.component';
import { Dialog } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../interfaces/api-response.interface';
import { Notificacion } from '../../../notificaciones/interfaces/notificacion.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-notificaciones-button',
  imports: [DialogHeaderComponent, NotificacionComponent],
  templateUrl: './notificaciones-button.component.html',
  styleUrl: './notificaciones-button.component.css',
})
export class NotificacionesButtonComponent implements OnInit {
  dialog = inject(Dialog);

  ngOnInit(): void {
    this.cargarNotificaciones();
  }

  viewRef = inject(ViewContainerRef);

  @ViewChild('notificacionesRef') notificacionsRef!: TemplateRef<any>;

  @ViewChild('buttonRef') button!: ElementRef<HTMLButtonElement>;

  private ref!: OverlayRef;

  http = inject(HttpClient);

  notificaciones = signal<Notificacion[]>([]);

  cargarNotificaciones() {
    this.http
      .get<ApiResponse<Notificacion[]>>('/api/notificaciones')
      .pipe(
        map((response) => response.data),
        map((data) => {
          console.log(data);
          return data;
        })
      )
      .subscribe((notificaciones) =>
        this.notificaciones.update((n) => [...n, ...notificaciones])
      );
  }

  show(): void {
    this.dialog.open(this.notificacionsRef, {
      closeOnNavigation:true,
    });
  }

  close(): void {
    this.ref.dispose();
  }
}
