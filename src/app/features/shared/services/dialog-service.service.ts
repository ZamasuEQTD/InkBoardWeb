import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { ElementRef, inject, Injectable } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  private overlay = inject(Dialog);

  constructor() { }
}
