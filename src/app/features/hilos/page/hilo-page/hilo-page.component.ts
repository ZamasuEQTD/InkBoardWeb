import {
  Component,
  computed,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { Hilo } from '../../interfaces/hilo.interface';
import { HiloService } from '../../services/hilo.service';
import { ActivatedRoute } from '@angular/router';
import { MediaBoxComponent } from '../../../shared/components/media-box/media-box.component';
import { HiloBodySkeletonComponent } from '../../components/hilo-body-skeleton/hilo-body-skeleton.component';
import { Comentario } from '../../../comentarios/interfaces/comentario.interface';
import { ComentarioSkeletonComponent } from '../../../comentarios/components/comentario-skeleton/comentario-skeleton.component';
import { ComentarioComponent } from '../../../comentarios/components/comentario/comentario.component';
import { ComentariosService } from '../../../comentarios/services/comentarios.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickedMedia } from '../../../shared/interfaces/picked-media.interface';
import { PickFileInputComponent } from '../../../shared/components/pick-file-input/pick-file-input.component';
import { SpoileablePickedMediaComponent } from '../../../core/components/spoileable-picked-media/spoileable-picked-media.component';
import { TagUtils } from '../../../comentarios/utils/tags-utils';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { TiempoTranscurridoPipe } from '../../../core/pipes/tiempoTranscurrido.pipe';
import { AutorRolePipe } from '../../../core/pipes/autor_role.pipe';
import { HiloPageService } from '../../services/hilo-page.service';
import { catchError, throwError } from 'rxjs';
import { Failure } from '../../../core/interfaces/failure';
import { Dialog } from '@angular/cdk/dialog';
import { EstasBaneadoDialogComponent } from '../../../baneos/components/estas-baneado-dialog/estas-baneado-dialog.component';
import { EncuestaComponent } from "../../../encuestas/components/encuesta/encuesta.component";

@Component({
  selector: 'hilo-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    MediaBoxComponent,
    HiloBodySkeletonComponent,
    ComentarioSkeletonComponent,
    ComentarioComponent,
    PickFileInputComponent,
    CdkMenuModule,
    SpoileablePickedMediaComponent,
    TiempoTranscurridoPipe,
    AutorRolePipe,
    EncuestaComponent
],
  templateUrl: './hilo-page.component.html',
  styleUrl: './hilo-page.component.css',
})
export class HiloPageComponent implements OnInit, OnDestroy {

  static cantidadMaximaDeTaggueos = 5;

  hiloService = inject(HiloService);

  service = inject(HiloPageService);

  comentariosService = inject(ComentariosService);

  failure = signal<Failure | undefined>(undefined);

  private fb: FormBuilder = inject(FormBuilder);

  private readonly dialog: Dialog = inject(Dialog);


  showBaneoFailure = effect(() => {
    if(this.failure()?.baneo){
      this.dialog.open(EstasBaneadoDialogComponent, {
        data: {
          baneo: this.failure()?.baneo!
        }
      });
    }
  });

  ngOnDestroy(): void {
    this.service.reiniciar();
  }

  comentarHiloForm = this.fb.group({
    texto: '',
    spoiler: false,
    file: this.fb.control<PickedMedia | undefined>(undefined, {
      validators: [],
    }),
  });

  route = inject(ActivatedRoute);

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      const id = params.get('id') as string;

      this.service.cargar(id, () => {
        this.route.queryParams.subscribe(params => {
          setTimeout(() => {
            const comentario: string | undefined = params['comentario'];

            if (comentario) {
              this.scrollToComentario(comentario);
            }
          }, 500);
        });

      });
    });
  }


  get hilo(): Hilo | undefined {
    return this.service.hilo();
  }



  get comentarios(): Comentario[] {
    return [...this.service.destacados(), ...this.service.comentarios()]
  }

  get cargandoComentarios(): boolean {
    return this.service.cargandoComentarios();
  }
  agregarMedia(picked: PickedMedia) {
    this.comentarHiloForm.patchValue({
      spoiler: false,
      file: picked,
    });
  }

  eliminarMedia(): void {
    this.comentarHiloForm.patchValue({
      file: undefined,
    });
  }

  tagguear(tag: string) {
    var texto = this.comentarHiloForm.get('texto')!.value! as string;

    if (TagUtils.incluyeTag(texto, tag)) return;

    if (this.alcanzoLimiteDeTaggueos(texto)) return;

    this.comentarHiloForm.patchValue({
      texto: this.comentarHiloForm.get('texto')!.value + '>>' + tag + ' ',
    });
  }

  comentar() {
    var data = new FormData();

    data.append('texto', this.comentarHiloForm.get('texto')!.value || '');

    const file = this.comentarHiloForm.get('file')?.value;

    if (file) {
      data.append('file', file.file!);
      data.append('spoiler', this.comentarHiloForm.get('spoiler')?.value?.toString() || 'false')
    }

    this.comentariosService
      .comentarHilo(this.hilo!.id, data)
      .pipe(catchError((e) => {

        var failure: Failure = e.error

        this.failure.set(failure);

        console.log(failure);

        return throwError(() => e);
      }))
      .subscribe(() => {
        this.comentarHiloForm.reset({
          texto: '',
          spoiler: false,
          file: undefined,
        });
      });
  }

  scrollToComentario(id: string) {
    var e = document.getElementById(id)

    if (e) {
      e.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  get media(): PickedMedia | null | undefined {
    return this.comentarHiloForm.get('file')!.value;
  }

  get spoiler(): boolean {
    return this.comentarHiloForm.get('spoiler')!.value as boolean;
  }

  private alcanzoLimiteDeTaggueos(texto: string): boolean {
    return (
      TagUtils.cantidadTags(texto) >= HiloPageComponent.cantidadMaximaDeTaggueos
    );
  }
}
