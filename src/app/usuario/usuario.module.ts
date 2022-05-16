import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../shared/usuario.service';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { ComunidadComponent } from '../comunidad/comunidad.component';

@NgModule({
  declarations: [
    HomeComponent,
    ComunidadComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  exports: [
    HomeComponent
  ]
})
export class UsuarioModule { }
