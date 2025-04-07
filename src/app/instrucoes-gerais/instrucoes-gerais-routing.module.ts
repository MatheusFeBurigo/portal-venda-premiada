import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrucoesGeraisComponent } from './instrucoes-gerais.component';

const routes: Routes = [
  {
    path: '',
    component: InstrucoesGeraisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrucoesGeraisRoutingModule { }
