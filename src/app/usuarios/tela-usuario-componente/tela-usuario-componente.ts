import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario-service';
import { IUsuario } from '../../interfaces/IUsuario';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-tela-usuario-componente',
  imports: [NgFor, NgClass],
  templateUrl: './tela-usuario-componente.html',
  styleUrl: './tela-usuario-componente.scss',
})
export class TelaUsuarioComponente implements OnInit {

  usuarios: IUsuario[] = []

  constructor(private usuarioService: UsuarioService) { }

  async ngOnInit(): Promise<void> {
    this.usuarios = await this.usuarioService.getAll()
  }

}
