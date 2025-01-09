import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Output() onClose = new EventEmitter<void>();

  close(){
    this.onClose.emit();
  }
}
