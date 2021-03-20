import { Component, OnInit } from '@angular/core';
interface nuevoPersonaje {
  id:number;
  nombre:string;
  edad:number;
}

@Component({
  selector: 'app-javascript-page',
  templateUrl: './javascript-page.component.html',
  styleUrls: ['./javascript-page.component.css']
})
export class JavascriptPageComponent implements OnInit {
  personajes:nuevoPersonaje = {
    id:0,
    nombre :'',
    edad:0
  } 

  naruto  = [
    {
    id:1,
    nombre:'naruto',
    edad:18
  },
  {
    id:2,
    nombre:'sakura',
    edad:17
  },
  {
    id:3,
    nombre:'sasuke',
    edad:18
  },
]
    constructor() { }

  ngOnInit(): void {
    console.log(this.naruto);
  }
  agregar(){
    if(this.naruto.length !== 0){
      this.naruto.push(this.personajes)
      this.personajes = {
        id:0,
        nombre :'',
        edad:0
      }
    }
    this.personajes = {
      id:0,
      nombre :'',
      edad:0
    }
  } 
  editar(personajes:nuevoPersonaje ){
     this.personajes = personajes;
    
  }
Eliminar(i:any){
  this.naruto.splice(i,1)
}

}
