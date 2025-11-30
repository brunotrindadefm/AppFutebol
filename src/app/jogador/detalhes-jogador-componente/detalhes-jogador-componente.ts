import { Component, Input } from '@angular/core';
import { IJogador } from '../../interfaces/IJogador';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { JogadorService } from '../../services/jogador/jogador-service';
import { TimeService } from '../../services/time/time-service';

@Component({
  selector: 'app-detalhes-jogador-componente',
  imports: [CommonModule],
  templateUrl: './detalhes-jogador-componente.html',
  styleUrl: './detalhes-jogador-componente.scss',
})
export class DetalhesJogadorComponente {

  @Input() jogador: IJogador | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jogadorService: JogadorService,
    private timeService: TimeService,
    private location: Location
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const jogadorEncontrado = await this.jogadorService.getById(id);

      this.jogador = jogadorEncontrado;

      if (this.jogador.timeId) {
        const timeDoJogador = await this.timeService.getById(this.jogador.timeId);
        this.jogador.time = Array.isArray(timeDoJogador) ? timeDoJogador[0] : timeDoJogador;
      }
    }
  }

  irParaTime(idTime: number | string | undefined) {
    if (idTime) {
      this.router.navigate(['/time/detalhes', idTime]);
    }
  }

  voltar() {
    this.location.back();
  }
}
