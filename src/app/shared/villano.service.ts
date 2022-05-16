import { Injectable } from '@angular/core';
import { Villano } from '../villano';
import { VILLANOS } from '../misvillanos';

@Injectable({
  providedIn: 'root'
})
export class VillanoService {

  private villanos:Villano[] = VILLANOS;

  constructor() { }

  getVillanos(): Villano[]{
    return this.villanos;
  }

  getUnVillano(posicion:number): Villano{
    return this.villanos[posicion];
  }

  searchUnVillano(nomvillano: string): number{
    let index = this.villanos.findIndex(p => p.nombre === nomvillano);
    return index;
  }
}
