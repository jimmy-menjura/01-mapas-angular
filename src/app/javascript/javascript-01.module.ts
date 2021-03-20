import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Javascript01RoutingModule } from './javascript-01-routing.module';
import { FormsModule } from '@angular/forms';
import { MapasComponent } from './mapas/mapas.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';


@NgModule({
  declarations: [MapasComponent, RickandmortyComponent],
  imports: [
    CommonModule,
    Javascript01RoutingModule
  ]
})
export class Javascript01Module { }
