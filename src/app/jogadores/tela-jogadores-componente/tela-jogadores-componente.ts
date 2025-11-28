import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IJogador } from '../../interfaces/IJogador';
import { JogadorService } from '../../services/jogador/jogador-service';
import { TimeService } from '../../services/time/time-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tela-jogadores-componente',
  imports: [NgFor],
  templateUrl: './tela-jogadores-componente.html',
  styleUrl: './tela-jogadores-componente.scss',
})
export class TelaJogadoresComponente {

  jogadores: IJogador[] = [];

  constructor(private jogadorService: JogadorService, private timeService: TimeService) { }

  ngOnInit(): void {
    this.carregarJogadores();
  }

  async carregarJogadores() {
    this.jogadores = await this.jogadorService.getAll();

    const promessas = this.jogadores.map(async (j) => {
      const timeResultado = await this.timeService.getById(j.timeId);

      const time = Array.isArray(timeResultado) ? timeResultado[0] : timeResultado;

      return { ...j, time };
    });

    this.jogadores = await Promise.all(promessas);
  }

  async deletarJogador(idJogador: number | string) {
    const confirmacao = confirm("Tem certeza que deseja excluir este time?");

    if (confirmacao) {
      try {
        await this.jogadorService.delete(idJogador);

        this.jogadores = this.jogadores.filter(j => j.id !== idJogador);

      } catch (erro) {
        alert('Não foi possível deletar o time.');
      }
    }
  }

}
