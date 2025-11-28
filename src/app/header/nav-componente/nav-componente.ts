import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../../app';

@Component({
  selector: 'app-nav-componente',
  imports: [CommonModule],
  templateUrl: './nav-componente.html',
  styleUrl: './nav-componente.scss',
})
export class NavComponente {

  @Output() toggleMenuClick = new EventEmitter<void>();
  @Output() toggleLogoutClick = new EventEmitter<void>();

  toggleMenu() {
    this.toggleMenuClick.emit();
  }

  toggleLogout() {
    this.toggleLogoutClick.emit();
  }
}
