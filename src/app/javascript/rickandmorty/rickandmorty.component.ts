import { Component, OnInit } from '@angular/core';
import { personajes, rickandmorty } from 'src/app/Model/rickandmorty';
import { RickandmortyService } from 'src/app/servicios/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {

  personaje: personajes[] = []
  constructor(private servicio:RickandmortyService) { }

  ngOnInit(){
  this.servicio.obtenerPersonajes().subscribe(data=>{
     this.personaje = data.results;
      console.log(this.personaje);
    });
  }

}
