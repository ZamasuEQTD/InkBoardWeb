import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { PostearHiloModalComponent } from '../../../hilos/components/postear-hilo-modal/postear-hilo-modal.component';

@Component({
  selector: 'app-postear-hilo-modal-button',
  imports: [],
  templateUrl: './postear-hilo-modal-button.component.html',
  styleUrl: './postear-hilo-modal-button.component.css',
})

export class PostearHiloModalButtonComponent {
  private dialog = inject(Dialog)

  showPostearDialog() :void {
    this.dialog.open(PostearHiloModalComponent)
  }
}
