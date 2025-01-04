import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import {MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'home-portada',
  imports: [
    CommonModule
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
      }
    ];
  }

  test(event : MouseEvent):void {

    event.stopPropagation();

    console.log("test")
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
