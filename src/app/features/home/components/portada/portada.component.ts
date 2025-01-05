import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import {MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'home-portada',
  imports: [
    CommonModule,
    MenuModule
  ],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css',
})
export class PortadaComponent {

  private router : Router = inject(Router);

  public get icons() : IconTag[] {
    return [
      {
        color : 'bg-yellow-500',
        icon: PrimeIcons.THUMBTACK
      },
      {
        color : 'bg-blue-500',
        icon: PrimeIcons.CHART_PIE
      },
      {
        color : 'bg-blue-500',
        icon: PrimeIcons.USER
      },
    ];
  }

  visitar() : void {
    console.log("hjj")

    this.router.navigateByUrl(`hilo/${''}`)
  }
}

interface IconTag {
  icon:string,
  color: string
}
