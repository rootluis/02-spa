import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-filtrados',
  templateUrl: './filtrados.component.html'
})
export class FiltradosComponent implements OnInit {

  heroesF: Heroe[] = [];

  constructor(  private _heroeService: HeroesService,
                private activatedRoute:ActivatedRoute,
                private router:Router) { 
    
    this.activatedRoute.params.subscribe(paramsF => {
      this.heroesF=this._heroeService.buscarHeroes(paramsF['nombre']);
    })
  }

  ngOnInit(): void {
  }

  verHeroeId(id:string){
    console.log("Identificador enviado para /heroe: " + id);
    this.router.navigate(['/heroe',id]);
  }

}
