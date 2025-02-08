import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerButtonComponent } from "../drawer-button/drawer-button.component";
import { NotificacionesButtonComponent } from "../notificaciones-button/notificaciones-button.component";
import { AuthService } from '../../../auth/services/auth-service';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    DrawerButtonComponent,
    NotificacionesButtonComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly auth = inject(AuthService);


  get autenticado() :boolean {
    return this.auth.autenticado();
  }
}
