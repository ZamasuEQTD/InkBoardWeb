import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-portada',
  imports: [],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortadaComponent {

  private router : Router = inject(Router);


  visitar() : void {
    this.router.navigateByUrl(`hilo/${''}`)
  }
 }
