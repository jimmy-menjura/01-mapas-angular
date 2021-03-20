import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptPageComponent } from './javascript-page/javascript-page.component';
import { MapasComponent } from './mapas/mapas.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';

const routes: Routes = [
  {
    path: '',
    component: JavascriptPageComponent
  },
  {
    path: 'mapas',
    component: MapasComponent
  },
  {
    path: 'rick',
    component: RickandmortyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Javascript01RoutingModule { }