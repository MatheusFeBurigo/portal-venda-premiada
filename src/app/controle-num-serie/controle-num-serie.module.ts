import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleNumSerieRoutingModule } from './controle-num-serie-routing.module';
import { ControleNumSerieComponent } from './controle-num-serie.component';


@NgModule({
  declarations: [
    ControleNumSerieComponent
  ],
  imports: [
    CommonModule,
    ControleNumSerieRoutingModule
  ]
})
export class ControleNumSerieModule { }
