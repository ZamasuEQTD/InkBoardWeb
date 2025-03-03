import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'portada-skeleton',
  imports: [
    CommonModule
  ],
  templateUrl: './portada-skeleton.component.html',
  styleUrls: ['./portada-skeleton.component.css', '../portada/portada.component.css']
})
export class PortadaSkeletonComponent {
  iconsCount :number = Math.floor(Math.random() * (5 - 1) + 1);

  icons : number[] = Array(this.iconsCount).fill(1)
}
