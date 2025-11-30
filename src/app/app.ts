import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet,  Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponente } from './header/nav-componente/nav-componente';
import { filter } from 'rxjs';
import { AsideComponente } from './aside/aside-componente/aside-componente';
import { AuthService } from './services/auth/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavComponente, AsideComponente],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('AppFutebol');

  mostrarAsideV: boolean = false;
  ehPaginaDeLogin: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const usuarioLogado = localStorage.getItem("usuario");

    if(!usuarioLogado)
      this.router.navigate(["/login"])

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.gerenciarVisibilidadeAside(event.url);
    });

  }

  gerenciarVisibilidadeAside(urlAtual: string) {
    this.ehPaginaDeLogin = urlAtual.includes('/login') || urlAtual === '/';
    if (this.ehPaginaDeLogin) {
      this.mostrarAsideV = false;
    } else {
      const estadoSalvo = localStorage.getItem('asideVisivel');
      if (estadoSalvo === 'true') {
        this.mostrarAsideV = true;
      }
    }
  }

  mostrarAside() {
    this.mostrarAsideV = true;
    localStorage.setItem('asideVisivel', 'true');
  }

  esconderAside() {
    this.mostrarAsideV = false;
    localStorage.removeItem('asideVisivel');
  }

  toggleAside() {
    this.mostrarAsideV = !this.mostrarAsideV;
  }

  logout() {
    this.authService.logout()
    this.ehPaginaDeLogin = true;
  }
}
