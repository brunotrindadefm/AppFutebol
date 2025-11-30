import { Component, OnInit } from '@angular/core';
import { ITime } from '../../interfaces/ITime';
import { IJogador } from '../../interfaces/IJogador';
import { TimeService } from '../../services/time/time-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JogadorService } from '../../services/jogador/jogador-service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-detalhes-time-componente',
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhes-time-componente.html',
  styleUrl: './detalhes-time-componente.scss',
})
export class DetalhesTimeComponente implements OnInit {

  time: ITime | null = null;
  jogadores: IJogador[] = [];

  goleiros: IJogador[] = [];
  defensores: IJogador[] = [];
  meioCampistas: IJogador[] = [];
  atacantes: IJogador[] = [];

  constructor(
    private route: ActivatedRoute,
    private timeService: TimeService,
    private jogadorService: JogadorService,
    private location: Location
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.time = await this.timeService.getById(id);

      if (this.time) {
        this.jogadores = await this.jogadorService.getByTimeId(this.time.id!);
        this.separarPorPosicao();
      }
    }
  }

  separarPorPosicao() {
    this.goleiros = this.jogadores.filter(j => j.posicao === 'Goleiro');
    this.defensores = this.jogadores.filter(j => j.posicao === 'Defensor' || j.posicao === 'Zagueiro' || j.posicao === 'Lateral');
    this.meioCampistas = this.jogadores.filter(j => j.posicao === 'Meio-Campo' || j.posicao === 'Volante');
    this.atacantes = this.jogadores.filter(j => j.posicao === 'Atacante');
  }

  voltar() {
    this.location.back();
  }
}