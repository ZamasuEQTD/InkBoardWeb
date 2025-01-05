import { Component } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { HiloBodyComponent } from "../../components/hilo-body/hilo-body.component";
import { HiloComentariosComponent } from "../../components/hilo-comentarios/hilo-comentarios.component";

@Component({
  selector: 'hilo-page',
  imports: [HeaderComponent, HiloBodyComponent, HiloComentariosComponent],
  templateUrl: './hilo-page.component.html',
  styleUrl: './hilo-page.component.css',
})
export class HiloPageComponent { }
