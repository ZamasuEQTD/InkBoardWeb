import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';
import { RegistrarseDialogComponent } from '../../../auth/registrarse-dialog/registrarse-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { LoginDialogComponent } from '../../../auth/login-dialog/login-dialog.component';
import { RegistroUsuarioDialogComponent } from '../../../registros/components/registro-usuario-dialog/registro-usuario-dialog.component';
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


  private dialog  = inject(Dialog);

  toggle():void {
    this.show = !this.show;

    if(this.show){
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
  }


  openRegistroDialog(): void {
    this.dialog.open(RegistroUsuarioDialogComponent)
  }

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent)
  }
}
