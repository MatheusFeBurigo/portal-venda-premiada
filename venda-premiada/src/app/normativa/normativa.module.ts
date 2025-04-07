import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormativaRoutingModule } from './normativa-routing.module';
import { NormativaComponent } from './normativa.component';


@NgModule({
  declarations: [
    NormativaComponent
  ],
  imports: [
    CommonModule,
    NormativaRoutingModule
  ]
})
export class NormativaModule { }
