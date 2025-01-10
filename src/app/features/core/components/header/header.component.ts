import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerButtonComponent } from "../drawer-button/drawer-button.component";
import { NotificacionesButtonComponent } from "../notificaciones-button/notificaciones-button.component";

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
export class HeaderComponent { }
