import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptPageComponent } from './javascript/javascript-page/javascript-page.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./javascript/javascript-01.module').then(m => m.Javascript01Module)
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }