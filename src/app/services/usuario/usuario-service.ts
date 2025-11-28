import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../interfaces/IUsuario';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends BaseService<IUsuario> {

  constructor(protected override http: HttpClient) {
    super(http, 'http://localhost:3000/usuarios');
  }
}
