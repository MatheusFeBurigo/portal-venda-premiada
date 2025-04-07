import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroVendaRoutingModule } from './cadastro-venda-routing.module';
import { CadastroVendaComponent } from './cadastro-venda.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoDynamicModule, PoModule } from '@po-ui/ng-components';
import { CadastroVendaCreateComponent } from './cadastro-venda-create/cadastro-venda-create.component';
import { CadastroVendaEditComponent } from './cadastro-venda-edit/cadastro-venda-edit.component';
import { CadastroVendaViewComponent } from './cadastro-venda-view/cadastro-venda-view.component';

@NgModule({
  declarations: [
    CadastroVendaComponent,
    CadastroVendaCreateComponent,
    CadastroVendaEditComponent,
    CadastroVendaViewComponent
  ],
  imports: [
    PoModule,
    PoTemplatesModule,
    CommonModule,
    CadastroVendaRoutingModule,
    PoDynamicModule
  ]
})
export class CadastroVendaModule { }
