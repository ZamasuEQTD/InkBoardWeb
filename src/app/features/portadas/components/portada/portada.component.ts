import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { Portada } from '../interfaces/portada.interface';

@Component({
  selector: 'portada',
  imports: [
    CommonModule,
    MenuModule
  ],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css',
})
export class PortadaComponent implements OnInit{


  @Input() portada!:Portada;

  private router : Router = inject(Router);

  public icons: IconTag[] = []

  ngOnInit(): void {
    this.icons =  [
      {
        color : 'bg-yellow-500',
        icon: 'fa-solid fa-thumbtack'
      },
      {
        color : 'bg-blue-500',
        icon: 'fa-solid fa-chart-simple'
      },
      {
        color : 'bg-blue-500',
        icon: 'fa-solid fa-dice-two'
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
