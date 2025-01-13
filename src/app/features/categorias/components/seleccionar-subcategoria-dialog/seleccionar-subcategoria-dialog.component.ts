import {Component, Inject} from '@angular/core';
import {DIALOG_DATA} from '@angular/cdk/dialog';
import { Categoria, Subcategoria } from '../../interfaces/subcategoria.interface';
@Component({
  selector: 'app-seleccionar-subcategoria-dialog',
  imports: [],
  templateUrl: './seleccionar-subcategoria-dialog.component.html',
  styleUrl: './seleccionar-subcategoria-dialog.component.css',
})
export class SeleccionarSubcategoriaDialogComponent {

  categorias : Categoria[] = [
    {
      nombre: 'Electrónica',
      subcategorias: [
        { id: '1', nombre: 'Smartphones', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '2', nombre: 'Laptops', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '3', nombre: 'Tablets', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' }
      ]
    },
    {
      nombre: 'Ropa',
      subcategorias: [
        { id: '4', nombre: 'Camisetas', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '5', nombre: 'Pantalones', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '6', nombre: 'Zapatos', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' }
      ]
    },
    {
      nombre: 'Hogar',
      subcategorias: [
        { id: '7', nombre: 'Muebles', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '8', nombre: 'Decoración', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '9', nombre: 'Electrodomésticos', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' }
      ]
    },
    {
      nombre: 'Deportes',
      subcategorias: [
        { id: '10', nombre: 'Fútbol', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '11', nombre: 'Baloncesto', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '12', nombre: 'Ciclismo', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' }
      ]
    },
    {
      nombre: 'Libros',
      subcategorias: [
        { id: '13', nombre: 'Ficción', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '14', nombre: 'No Ficción', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' },
        { id: '15', nombre: 'Ciencia', image: 'https://i.ytimg.com/vi/rCS-p5tTR1g/maxresdefault.jpg' }
      ]
    }
  ];

  constructor(
  @Inject(DIALOG_DATA) public data: {
    onSubcategoriaSeleccionada: (subcategoria:Subcategoria)=> void
  }
  ){}
}
