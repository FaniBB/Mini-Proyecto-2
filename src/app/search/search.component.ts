import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Heroe } from '../heroe';

import { HeroeService } from '../shared/heroe.service';
import { VillanoService } from '../shared/villano.service';
import { Villano } from '../villano';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreh: string="";
  indice: number=0;

  miheroe: Heroe={
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: ""
  };
  //Aber si sirve
  nombrev: string = "";
  mivillano: Villano={
    nombre: "",
    bio: "",
    img: "",
    casa: ""
  }

  constructor( private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private villanoService: VillanoService) {

    this.activatedRoute.params.subscribe(params => {
      this.nombreh = params['nombreh'];
      this.indice = this.heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);

      if (this.indice != -1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }
      if(this.indice == -1){
        console.log(this.nombreh);
        
        // Redireccionamiento
        window.setTimeout(function(){
          window.location.href = 'home';
        },9000)

      }

    });
   }

  ngOnInit(): void {
  }

}
