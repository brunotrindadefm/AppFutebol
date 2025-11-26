import { Routes } from '@angular/router';
import { LoginComponente } from './auth/login-componente/login-componente';
import { TelaUsuarioComponente } from './usuarios/tela-usuario-componente/tela-usuario-componente';
import { TelaTimeComponente } from './time/tela-time-componente/tela-time-componente';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'usuarios', component: TelaUsuarioComponente },
  { path: 'login', component: LoginComponente },
  { path: 'time', component: TelaTimeComponente }
];