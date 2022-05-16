import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../shared/usuario.service';
import { Cliente } from '../usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cliente: Cliente = {
    nombre: "",
    sexo: "",
    correo: "",
    fecha:""
  };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cliente = this.usuarioService.nuevoCliente();
  }

  nuevoCliente(): void{
    this.usuarioService.agregarClientes(this.cliente);
    this.cliente = this.usuarioService.nuevoCliente();
    console.log(this.cliente);
  }
}
