import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
import { IUsuario } from '../../interfaces/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  async login(email: string, senha: string): Promise<IUsuario | null> {
    return await firstValueFrom(this.http.get<IUsuario[]>(`${this.apiUrl}?email=${email}&senha=${senha}`));
  }

  logout() {
    localStorage.clear();
  }

  // Método auxiliar para saber se tem alguém logado
  estaLogado(): boolean {
    return !!localStorage.getItem('usuario');
  }
}