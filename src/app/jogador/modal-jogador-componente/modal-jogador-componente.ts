import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IJogador } from '../../interfaces/IJogador';
import { FormsModule } from '@angular/forms';
import { ITime } from '../../interfaces/ITime';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-jogador-componente',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-jogador-componente.html',
  styleUrl: './modal-jogador-componente.scss',
})
export class ModalJogadorComponente {
  @Input() jogadorParaEditar: IJogador | null = null;
  @Input() times: ITime[] = [];

  @Output() fechar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<IJogador>();

  dadosFormulario: IJogador = this.inicializarJogador();

  ngOnChanges(changes: SimpleChanges) {
    if (this.jogadorParaEditar)
      this.dadosFormulario = { ...this.jogadorParaEditar };
    else
      this.dadosFormulario = this.inicializarJogador();
  }

  private inicializarJogador(): IJogador {
    return {
      nome: '',
      posicao: '',
      numero: 0,
      nacionalidade: '',
      idade: 0,
      timeId: 0
    };
  }

  cancelar() {
    this.fechar.emit();
  }

  confirmar() {
    this.salvar.emit(this.dadosFormulario);
  }

}
