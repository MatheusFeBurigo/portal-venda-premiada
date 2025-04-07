import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControleNumSerieComponent } from './controle-num-serie.component';

const routes: Routes = [
  {
    path: '',
    component: ControleNumSerieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControleNumSerieRoutingModule { }
