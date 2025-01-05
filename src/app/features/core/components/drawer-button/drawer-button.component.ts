import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-drawer-button',
  imports: [
    DrawerModule,
    MenuModule
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

  public toggle(){
    this.show = !this.show;

    if(this.show){
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
  }
}
