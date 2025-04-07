import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroVendaViewComponent } from './cadastro-venda-view/cadastro-venda-view.component';
import { CadastroVendaCreateComponent } from './cadastro-venda-create/cadastro-venda-create.component';
import { CadastroVendaEditComponent } from './cadastro-venda-edit/cadastro-venda-edit.component';

const routes: Routes = [
    { path: '', component: CadastroVendaViewComponent },
    { path: 'create', component: CadastroVendaCreateComponent },
    { path: 'edit', component: CadastroVendaEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroVendaRoutingModule { }
