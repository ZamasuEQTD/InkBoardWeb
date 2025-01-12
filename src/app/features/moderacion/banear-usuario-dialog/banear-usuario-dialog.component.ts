import { Component, inject } from '@angular/core';
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { InputLabeledComponent } from "../../shared/components/input-labeled/input-labeled.component";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-banear-usuario-dialog',
  imports: [DialogComponent, InputLabeledComponent],
  templateUrl: './banear-usuario-dialog.component.html',
  styleUrl: './banear-usuario-dialog.component.css',
})
export class BanearUsuarioDialogComponent {
  static razones : RazonDeBaneo[] = [
    {
      id: 0,
      razon: "Contenido Inapropiado"
    }
  ]

  static duracions : DuracionDeBaneo [] = []

  private fb : FormBuilder  = inject(FormBuilder);

  form = this.fb.group({
    razon: this.fb.control<RazonDeBaneo | undefined>(undefined),
    duracion: this.fb.control<DuracionDeBaneo | undefined>(undefined),
    mensaje: this.fb.control<string>("")
  })
}


interface RazonDeBaneo {
  id:number
  razon: string
}

interface DuracionDeBaneo {
  id:number
  duracion: string
}
