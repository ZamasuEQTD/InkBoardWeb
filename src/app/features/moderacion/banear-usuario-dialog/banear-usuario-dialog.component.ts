import { Component, inject, signal } from '@angular/core';
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { InputLabeledComponent } from "../../shared/components/input-labeled/input-labeled.component";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-banear-usuario-dialog',
  imports: [DialogComponent, InputLabeledComponent, ReactiveFormsModule],
  templateUrl: './banear-usuario-dialog.component.html',
  styleUrl: './banear-usuario-dialog.component.css',
})
export class BanearUsuarioDialogComponent {
  static razones: RazonDeBaneo[] = [
    {
      id: 0,
      razon: "Spam"
    },
    {
      id: 1,
      razon: "Contenido Inapropiado"
    },
    {
      id: 2,
      razon: "Categoria Incorrecta"
    },
    {
      id: 3,
      razon: "Otro"
    }
  ]

  static duraciones: DuracionDeBaneo[] = [
    {
      id: 0,
      duracion: "Cinco Minutos"
    },
    {
      id: 1,
      duracion: "Una Hora"
    },
    {
      id: 2,
      duracion: "Un Día"
    },
    {
      id: 3,
      duracion: "Una Semana"
    },
    {
      id: 4,
      duracion: "Un Mes"
    },
    {
      id: 5,
      duracion: "Permanente"
    }
  ]

  showDuraciones = signal(false);
  showRazones = signal(false);


  public get razones() {
    return BanearUsuarioDialogComponent.razones;
  }

  public get duraciones() {
    return BanearUsuarioDialogComponent.duraciones;
  }

  public get razon(): string | undefined {
    return this.form.get('razon')?.value?.razon;
  }

  public get duracion(): string | undefined {
    return this.form.get('duracion')?.value?.duracion;
  }

  private fb: FormBuilder = inject(FormBuilder);

  form = this.fb.group({
    razon: this.fb.control<RazonDeBaneo | undefined>(undefined),
    duracion: this.fb.control<DuracionDeBaneo | undefined>(undefined),
    mensaje: this.fb.control<string>("")
  })
}


interface RazonDeBaneo {
  id: number
  razon: string
}

interface DuracionDeBaneo {
  id: number
  duracion: string
}
