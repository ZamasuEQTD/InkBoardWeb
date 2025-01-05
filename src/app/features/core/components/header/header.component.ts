import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerButtonComponent } from "../drawer-button/drawer-button.component";

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    DrawerButtonComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent { }
