import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-input-labeled',
  imports: [],
  templateUrl: './input-labeled.component.html',
  styleUrl: './input-labeled.component.css',
})
export class InputLabeledComponent {
  @Input() label!:string;
}
