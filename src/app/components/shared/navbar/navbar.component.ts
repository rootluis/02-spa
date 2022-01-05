import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(nombre :string){
    console.log(nombre)
    this.router.navigate(['/filtro', nombre]);
  }

}
