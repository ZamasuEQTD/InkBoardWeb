import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '../../interfaces/comentario.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-texto',
  imports: [],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css',
})
export class TextoComponent implements OnInit{

  @Input() comentario!:Comentario;

  sections :TextoSection [] = [];

  ngOnInit(): void {
    const regexs = /(>>[A-Z0-9]{8})|(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g;
    let lastIndex = 0;
    let match;

    while ((match = regexs.exec(this.comentario.texto)) !== null) {
    // Texto antes del match
      if (match.index > lastIndex) {
          this.sections.push({
              type: 'text',
              content:  this.comentario.texto.substring(lastIndex, match.index)
          });
      }

      // Determinar tipo de match
      if (match[1]) { // Tag (grupo 1)

          if(!this.comentario.responde_a.includes(match[1].substring(2))){
            this.sections.push({
              type: 'text',
              content: match[1]
            });
          } else {
            this.sections.push({
              type: 'tag',
              content: match[1]
            });
          }

      } else if (match[2]) { // URL (grupo 2)
          this.sections.push({
              type: 'link',
              content: match[2]
          });
      }

      lastIndex = regexs.lastIndex;
    }


    if (lastIndex < this.comentario.texto.length) {
      this.sections.push({
        type: 'text',
        content: this.comentario.texto.substring(lastIndex)
      });
    }

  }
}


interface TextoSection {
  type:"text" | "link" | "tag"
  content:string
}
