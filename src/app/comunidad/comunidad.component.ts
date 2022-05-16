import { Component, OnInit } from '@angular/core';
import { Cliente } from '../usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

  usuarios: Cliente[]=[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getClientes();
  }

}
