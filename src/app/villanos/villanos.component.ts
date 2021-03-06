import { Component, OnInit } from '@angular/core';
import { VillanoService } from '../shared/villano.service';
import { Villano } from '../villano';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  misVillanos: Villano[]=[];

  constructor(public miservicio: VillanoService) {
    console.log("constructor de villanos")
   }

  ngOnInit(): void {
    console.log("ngOnInit de Villanos");
    this.misVillanos = this.miservicio.getVillanos();
    console.log(this.misVillanos);
  }

}
