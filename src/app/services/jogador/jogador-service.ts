import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { IJogador } from '../../interfaces/IJogador';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class JogadorService extends BaseService<IJogador> {

  constructor(protected override http: HttpClient) {
    super(http, 'http://localhost:3000/jogadores');
  }
}
