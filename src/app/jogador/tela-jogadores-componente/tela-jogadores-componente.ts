import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IJogador } from '../../interfaces/IJogador';
import { JogadorService } from '../../services/jogador/jogador-service';
import { TimeService } from '../../services/time/time-service';
import { ToastrService } from 'ngx-toastr';
import { ModalJogadorComponente } from '../modal-jogador-componente/modal-jogador-componente';
import { ITime } from '../../interfaces/ITime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-jogadores-componente',
  imports: [CommonModule, ModalJogadorComponente],
  templateUrl: './tela-jogadores-componente.html',
  styleUrl: './tela-jogadores-componente.scss',
})
export class TelaJogadoresComponente {
  jogadores: IJogador[] = [];
  modalAberto: boolean = false;
  jogadorSelecionado: IJogador | null = null;
  listaDeTimes: ITime[] = [];

  constructor(private jogadorService: JogadorService,
    private timeService: TimeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.listaDeTimes = await this.timeService.getAll();
    this.carregarJogadores();
  }

  async carregarJogadores() {
    const todosJogadores = await this.jogadorService.getAll();

    this.jogadores = todosJogadores.map(jogador => {

      const timeEncontrado = this.listaDeTimes.find(t => t.id == jogador.timeId);

      return { ...jogador, time: timeEncontrado };
    });
  }

  async deletarJogador(idJogador: number | string) {
    const confirmacao = confirm("Tem certeza que deseja excluir este time?");

    if (confirmacao) {
      try {
        await this.jogadorService.delete(idJogador);

        this.jogadores = this.jogadores.filter(j => j.id !== idJogador);

        this.toastr.success("Jogador deleatado com sucesso!", 'Sucesso');

      } catch (erro: any) {
        this.toastr.error(erro.message, 'Erro ao deletar');
      }
    }
  }

  abrirModalCriacao() {
    this.jogadorSelecionado = null;
    this.modalAberto = true;
  }

  abrirModalEdicao(jogador: IJogador) {
    this.jogadorSelecionado = jogador;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  async processarSalvar(dadosDoModal: IJogador) {
    try {
      if (dadosDoModal.id != 0 && dadosDoModal.id != undefined) {
        await this.jogadorService.update(dadosDoModal.id, dadosDoModal);
        const index = this.jogadores.findIndex(t => t.id === dadosDoModal.id);
        if (index !== -1) this.jogadores[index] = dadosDoModal;

      } else {
        const { id, ...jogadorParaSalvar } = dadosDoModal;
        const novoJogador = await this.jogadorService.create(jogadorParaSalvar);
        this.jogadores.push(novoJogador);
      }

      this.modalAberto = false;
      this.carregarJogadores();

      this.toastr.success('Jogador salvo com sucesso!');
    } catch (erro: any) {
      this.toastr.error('Erro ao salvar', erro.message);
    }
  }

  irParaDetalhes(id: number) {
    this.router.navigate(['/jogador/detalhes', id]);
  }
}
