import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-dialog-header',
  imports: [],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.css',
})
export class DialogHeaderComponent {

  @Input() public title!: string;

  @Output() public onClose: EventEmitter<void> = new EventEmitter<void>();

  public close():void {
    this.onClose.emit();
  }
}
