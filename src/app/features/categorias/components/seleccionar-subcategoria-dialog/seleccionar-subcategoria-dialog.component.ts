import {Component, inject, Inject, OnInit, signal} from '@angular/core';
import {DIALOG_DATA} from '@angular/cdk/dialog';
import { Categoria, Subcategoria } from '../../interfaces/subcategoria.interface';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../../core/interfaces/api-response.interface';
import { map } from 'rxjs';
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";
@Component({
  selector: 'app-seleccionar-subcategoria-dialog',
  imports: [DialogComponent],
  templateUrl: './seleccionar-subcategoria-dialog.component.html',
  styleUrl: './seleccionar-subcategoria-dialog.component.css',
})
export class SeleccionarSubcategoriaDialogComponent implements OnInit {

  private http = inject(HttpClient);

  categorias = signal<Categoria []> ([]);

  constructor(
  @Inject(DIALOG_DATA) public data: {
    onSubcategoriaSeleccionada: (subcategoria:Subcategoria)=> void
  }
  ){}

  ngOnInit(): void {
    this.http.get<ApiResponse<Categoria[]>>("/api/categorias").pipe(
      map(x=> x.data)
    ).subscribe(c=> this.categorias.set(c));
  }
}
