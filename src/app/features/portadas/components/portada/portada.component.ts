import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Portada, Banderas } from '../../interfaces/portada.interface';

import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'portada',
  imports: [
    CommonModule,
    MenuModule,
    RouterModule
  ],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css',
})
export class PortadaComponent implements OnInit{


  @Input() portada!:Portada;

  public icons: IconTag[] = []

  ngOnInit(): void {
    this.icons = [
      {
        color: 'bg-yellow-500',
        icon: 'fa-solid fa-thumbtack',
        active: this.portada.es_sticky
      },
      {
        color: 'bg-blue-500',
        icon: 'fa-solid fa-chart-simple',
        active: this.portada.banderas.tiene_encuesta
      },
      {
        color: 'bg-blue-500',
        icon: 'fa-solid fa-dice-two',
        active: this.portada.banderas.dados_activados
      },
    ];
  }


  public opciones : MenuItem[] = [
    {
      label: "Denunciar",
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
      label: "Ver usuario",
      command: (event) => {
      }
    }
  ];
}

interface IconTag {
  icon:string
  color: string
  active: boolean
}
