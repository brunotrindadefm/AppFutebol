import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-time',
  standalone: true,           
  imports: [NgFor],                
  templateUrl: './tela-time-componente.html',
  styleUrls: ['./tela-time-componente.scss']
})

export class TelaTimeComponente {

  times = [
    {
      nome: 'Flamengo',
      cidade: 'Rio de Janeiro - RJ',
      estadio: 'Maracanã',
      fundacao: 1895,
      pontos: 28
    },
    {
      nome: 'Palmeiras',
      cidade: 'São Paulo - SP',
      estadio: 'Allianz Parque',
      fundacao: 1914,
      pontos: 30
    },
    {
      nome: 'Corinthians',
      cidade: 'São Paulo - SP',
      estadio: 'Neo Química Arena',
      fundacao: 1910,
      pontos: 25
    },
    {
      nome: 'São Paulo',
      cidade: 'São Paulo - SP',
      estadio: 'Morumbi',
      fundacao: 1930,
      pontos: 27
    },
    {
      nome: 'Internacional',
      cidade: 'Porto Alegre - RS',
      estadio: 'Beira-Rio',
      fundacao: 1909,
      pontos: 26
    },
    {
      nome: 'Grêmio',
      cidade: 'Porto Alegre - RS',
      estadio: 'Arena do Grêmio',
      fundacao: 1903,
      pontos: 24
    }
  ];
}
