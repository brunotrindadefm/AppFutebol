import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../../app';

@Component({
  selector: 'app-login-componente',
  imports: [],
  templateUrl: './login-componente.html',
  styleUrl: './login-componente.scss',
})
export class LoginComponente {

  constructor(private router: Router,  private app: App) {}

  login() {
    this.app.mostrarAside(); 
    this.router.navigate(['/usuarios']);
  }
}
