import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import { InputLabeledComponent } from '../../shared/components/input-labeled/input-labeled.component';
import { DialogHeaderComponent } from "../../shared/components/dialog-header/dialog-header.component";
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-registrarse-dialog',
  imports: [
    InputLabeledComponent,
    DialogHeaderComponent
],
  templateUrl: './registrarse-dialog.component.html',
  styleUrl: './registrarse-dialog.component.css',
})
export class RegistrarseDialogComponent {

  @Output() closeOverlay = new EventEmitter<void>();

  constructor() {}

  onClose() :void {
    this.closeOverlay.emit()
  }
}
