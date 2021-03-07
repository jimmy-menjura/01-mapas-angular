import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map:any;
  title = 'proyectoMapas';
  constructor(){}

  ngOnInit(){
    this.verMapa();
  }
  verMapa(){
    const latYlon = {
      lat:4.6265976722086375,
      lng:-74.15139124716826,
    };
    this.map = L.map('map', {
      center: [ latYlon.lat,latYlon.lng ],
      zoom: 13
    });
   const mapa = L.tileLayer('	https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',{
      minZoom:12,
      maxZoom:17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    mapa.addTo(this.map)
  }
}
