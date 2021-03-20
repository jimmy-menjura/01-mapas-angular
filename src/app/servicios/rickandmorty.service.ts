import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { rickandmorty } from '../Model/rickandmorty';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
   url = environment.url;
   list:any[];
  constructor(private http:HttpClient ) {
    this.list=[];
   }

  obtenerPersonajes():Observable<rickandmorty>{
   return this.http.get<rickandmorty>(this.url)
  }
}
