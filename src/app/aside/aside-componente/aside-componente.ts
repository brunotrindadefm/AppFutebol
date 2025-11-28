import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-aside-componente',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './aside-componente.html',
  styleUrl: './aside-componente.scss',
})
export class AsideComponente {

}
