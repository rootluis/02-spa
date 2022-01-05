import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroeS: Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router ) {     
    console.log("En el constructor de HeroesComponent...!!!");
  }

  ngOnInit(): void {    
    this.heroeS = this._heroesService.getHeroes();
    console.log(this.heroeS);
  }

  verHeroe(idx:string){
    this.router.navigate(['/heroe',idx]);
    //console.log(idx);
  }

}
