import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PortadaComponent } from "../../components/portada/portada.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    PortadaComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  l : number[] = Array(29).fill(1);
}
