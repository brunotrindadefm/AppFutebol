import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
import { IUsuario } from '../../interfaces/IUsuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient, private router: Router) { }

  async login(email: string, senha: string): Promise<IUsuario[] | null> {
    return await firstValueFrom(this.http.get<IUsuario[]>(`${this.apiUrl}?email=${email}&senha=${senha}`));
  }

  logout() {
    this.router.navigate(["/login"]);
    localStorage.removeItem('usuario');
  }

  estaLogado(): boolean {
    return !!localStorage.getItem('usuario');
  }
}