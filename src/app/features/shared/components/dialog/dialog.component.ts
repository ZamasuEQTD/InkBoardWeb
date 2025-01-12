import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { DialogHeaderComponent } from "../dialog-header/dialog-header.component";

@Component({
  selector: 'app-dialog',
  imports: [DialogHeaderComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Input() fullscreenOnMobile : boolean  = true;

  @Input() title?:string;

  private _dialog  = inject(DialogRef);

  close() : void {
    this._dialog.close();
  }
}
