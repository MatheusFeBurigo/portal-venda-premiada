import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrucoesGeraisRoutingModule } from './instrucoes-gerais-routing.module';
import { InstrucoesGeraisComponent } from './instrucoes-gerais.component';


@NgModule({
  declarations: [
    InstrucoesGeraisComponent
  ],
  imports: [
    CommonModule,
    InstrucoesGeraisRoutingModule
  ]
})
export class InstrucoesGeraisModule { }
