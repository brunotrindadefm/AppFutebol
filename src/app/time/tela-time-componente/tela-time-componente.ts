import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITime } from '../../interfaces/ITime';
import { TimeService } from '../../services/time/time-service';
import { ModalTimeComponente } from '../modal-time-componente/modal-time-componente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tela-time',
  standalone: true,
  imports: [CommonModule, ModalTimeComponente],
  templateUrl: './tela-time-componente.html',
  styleUrls: ['./tela-time-componente.scss']
})

export class TelaTimeComponente implements OnInit {
  times: ITime[] = [];
  modalAberto: boolean = false;
  timeSelecionado: ITime | null = null;

  constructor(private timeService: TimeService, private toastr: ToastrService) { }

  async ngOnInit(): Promise<void> {
    this.times = await this.timeService.getAll();
  }

  async deletarTime(idTime: number | string) {
    const confirmacao = confirm("Tem certeza que deseja excluir este time?");

    if (confirmacao) {
      try {
        await this.timeService.delete(idTime);

        this.times = this.times.filter(time => time.id !== idTime);

        this.toastr.success('Time deletado com sucesso!');
      } catch (erro) {
        this.toastr.error('Não foi possível deletar o time.');
      }
    }
  }

  abrirModalCriacao() {
    this.timeSelecionado = null;
    this.modalAberto = true;
  }

  abrirModalEdicao(time: ITime) {
    this.timeSelecionado = time;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  async processarSalvar(dadosDoModal: ITime) {
    try {
      if (dadosDoModal.id != 0 && dadosDoModal.id != undefined) {
        await this.timeService.update(dadosDoModal.id, dadosDoModal);
        const index = this.times.findIndex(t => t.id === dadosDoModal.id);
        if (index !== -1) this.times[index] = dadosDoModal;

      } else {
        const { id, ...timeParaSalvar } = dadosDoModal;
        const novoTime = await this.timeService.create(timeParaSalvar);
        this.times.push(novoTime);
      }

      this.modalAberto = false;

      this.toastr.success('Time salvo com sucesso!');
    } catch (erro: any) {
      this.toastr.error('Erro ao salvar', erro.message);
    }
  }
}
