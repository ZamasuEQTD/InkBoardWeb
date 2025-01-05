import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,  } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { PortadaSkeletonComponent } from "../../components/portada-skeleton/portada-skeleton.component";
//import { PortadaComponent } from "../../components/portada/portada.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    RouterModule,
    PortadaSkeletonComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  l : number[] = Array(29).fill(1);
}
