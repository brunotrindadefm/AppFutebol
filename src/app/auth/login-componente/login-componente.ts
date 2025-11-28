import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../../app';
import { AuthService } from '../../services/auth/auth-service';
import { IUsuario } from '../../interfaces/IUsuario';

@Component({
  selector: 'app-login-componente',
  imports: [],
  templateUrl: './login-componente.html',
  styleUrl: './login-componente.scss',
})
export class LoginComponente {

  @Output() usuarioLogado = new EventEmitter<IUsuario>();

  constructor(private router: Router, private app: App, private authService: AuthService) { }

  async login(email: string, senha: string) {
    const usuario = await this.authService.login(email, senha);

    this.usuarioLogado.emit(usuario);
    this.app.mostrarAside();
  }
}
