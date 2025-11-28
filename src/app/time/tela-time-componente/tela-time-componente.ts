import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITime } from '../../interfaces/ITime';
import { TimeService } from '../../services/time/time-service';

@Component({
  selector: 'app-tela-time',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tela-time-componente.html',
  styleUrls: ['./tela-time-componente.scss']
})

export class TelaTimeComponente implements OnInit {
  times: ITime[] = [];

  constructor(private timeService: TimeService) { }

  async ngOnInit(): Promise<void> {
    this.times = await this.timeService.getAll();
  }

  async deletarTime(idTime: number | string) {
    const confirmacao = confirm("Tem certeza que deseja excluir este time?");

    if (confirmacao) {
      try {
        await this.timeService.delete(idTime);

        this.times = this.times.filter(time => time.id !== idTime);

      } catch (erro) {
        alert('Não foi possível deletar o time.');
      }
    }
  }

}
