import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../../app';
import { AuthService } from '../../services/auth/auth-service';
import { IUsuario } from '../../interfaces/IUsuario';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-componente',
  imports: [FormsModule],
  templateUrl: './login-componente.html',
  styleUrl: './login-componente.scss',
})
export class LoginComponente {

  email: string = '';
  senha: string = '';
  @Output() usuarioLogado = new EventEmitter<IUsuario | null>();

  constructor(
    private router: Router,
    private app: App,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  async login() {
    let arrayUsuarios = await this.authService.login(this.email, this.senha);
    let usuario = null;

    if (arrayUsuarios)
      usuario = arrayUsuarios[0];

    if (usuario && this.email !== '' && this.senha !== '') {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigate(["/usuarios"])
      this.app.mostrarAside()
    }
    else
      this.toastr.error('Email ou senha incorretos.', 'Erro ao logar');
  }

}
