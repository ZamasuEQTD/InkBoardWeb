import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portada } from '../interfaces/portada.interface';

import { MenuModule } from 'primeng/menu';


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


  public opciones : MenuItem[] = [
    {
      label: "Denunciar"
    },
    {
      label: "Seguir"
    },
    {
      label: "Ocultar"
    },
    {
      label: "Poner en favoritos"
    },
    {
      label: "Eliminar",
    },
    {
      label: "Ver usuario"
    }
  ];

  visitar() : void {
    this.router.navigateByUrl(`hilo/${this.portada.id}`)
  }
}

interface IconTag {
  icon:string,
  color: string
}
