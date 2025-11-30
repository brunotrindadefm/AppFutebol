import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ITime } from '../../interfaces/ITime';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-time-componente',
  imports: [FormsModule],
  templateUrl: './modal-time-componente.html',
  styleUrl: './modal-time-componente.scss',
})
export class ModalTimeComponente {
  @Input() timeParaEditar: ITime | null = null;

  @Output() fechar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<ITime>();

  dadosFormulario: ITime = this.inicializarTime();

  ngOnChanges(changes: SimpleChanges) {
    if (this.timeParaEditar)
      this.dadosFormulario = { ...this.timeParaEditar };
    else
      this.dadosFormulario = this.inicializarTime();
  }

  private inicializarTime(): ITime {
    return {
      nome: '',
      cidade: '',
      estadio: '',
      fundacao: new Date().getFullYear()
    };
  }

  cancelar() {
    this.fechar.emit();
  }

  confirmar() {
    this.salvar.emit(this.dadosFormulario);
  }

}
