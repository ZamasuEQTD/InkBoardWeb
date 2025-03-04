import { Component, Inject, input } from '@angular/core';
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';


interface Baneo {
  moderador:string
  razon:string
  finalizacion:Date
  mensaje?:string
}

@Component({
  selector: 'app-estas-baneado-dialog',
  imports: [DialogComponent, CommonModule],
  templateUrl: './estas-baneado-dialog.component.html',
  styleUrl: './estas-baneado-dialog.component.css',
})
export class EstasBaneadoDialogComponent {
   constructor(
    @Inject(DIALOG_DATA) public data: {
      baneo: Baneo
    }
    ){}
}
