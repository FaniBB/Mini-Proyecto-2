import { Injectable } from '@angular/core';
import { Cliente } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private clientes: Cliente[] = [];

  constructor() {
    this.clientes = JSON.parse(localStorage.getItem("data") || '[]');
  }

  getClientes(){
    return this.clientes;
  }

  agregarClientes(cliente: Cliente){
    this.clientes.push(cliente);
    localStorage.setItem('data', JSON.stringify(this.clientes));
  }

  nuevoCliente(): Cliente{
    return{
      nombre: "",
      sexo: "",
      correo: "",
      fecha: "",
    }
  }
}
