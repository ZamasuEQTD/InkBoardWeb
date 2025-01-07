import { PickedMedia } from './../../interfaces/picked-media.interface';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pick-file-input',
  imports: [],
  templateUrl: './pick-file-input.component.html',
  styleUrl: './pick-file-input.component.css',
})
export class PickFileInputComponent {
  @Output() onPickedFile = new EventEmitter<PickedMedia>()

  @ViewChild('inputRef') ref !: ElementRef<HTMLInputElement>

  pick() : void {
    this.ref.nativeElement.click()
  }

  clear() : void {
    this.ref.nativeElement.value ='';
  }


  onChange(event: any) :void{
    const  files :FileList = event.target.files;

    const  file : File= files[0];

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.onPickedFile.emit({
        type :  file.type.split('/')[0],
        source :  reader.result! as string
      });
    }

    reader.readAsDataURL(file);
  }
}
