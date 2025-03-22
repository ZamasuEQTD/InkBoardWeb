import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';
import { Dialog } from '@angular/cdk/dialog';
import { AuthService } from '../../../auth/services/auth-service';
import { CurrentUser } from '../../../auth/interfaces/current-user.interface';
import { RegistrarseDialogComponent } from '../../../auth/components/registrarse-dialog/registrarse-dialog.component';
import { LoginDialogComponent } from '../../../auth/components/login-dialog/login-dialog.component';
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

  private authService = inject(AuthService);

  private dialog  = inject(Dialog);

  get currentUser () : CurrentUser | undefined{
    return this.authService.currentUser()
  }

  logout = () => this.authService.logout();

  toggle():void {
    this.show = !this.show;

    if(this.show){
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
  }


  openRegistroDialog(): void {
    this.dialog.open(RegistrarseDialogComponent)
  }

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent)
  }
}
