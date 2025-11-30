import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../../app';
import { IUsuario } from '../../interfaces/IUsuario';

@Component({
  selector: 'app-nav-componente',
  imports: [CommonModule],
  templateUrl: './nav-componente.html',
  styleUrl: './nav-componente.scss',
})
export class NavComponente implements OnInit {

  usuario: IUsuario | null = null;
  @Output() toggleMenuClick = new EventEmitter<void>();
  @Output() toggleLogoutClick = new EventEmitter<void>();

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario') || '{}') : null;
  }

  toggleMenu() {
    this.toggleMenuClick.emit();
  }

  toggleLogout() {
    this.toggleLogoutClick.emit();
  }
}
