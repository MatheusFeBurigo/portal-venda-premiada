import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    
    children: [
      { 
        path: 'cadastro-venda', 
        loadChildren: () => import('.././cadastro-venda/cadastro-venda.module').then( m => m.CadastroVendaModule)
      },
      { 
        path: 'controle-num-serie', 
        loadChildren: () => import('.././controle-num-serie/controle-num-serie.module').then( m => m.ControleNumSerieModule)
      },
      { 
        path: 'instrucoes-gerais', 
        loadChildren: () => import('.././instrucoes-gerais/instrucoes-gerais.module').then( m => m.InstrucoesGeraisModule)
      },
      { 
        path: 'normativa', 
        loadChildren: () => import('.././normativa/normativa.module').then( m => m.NormativaModule)
      },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
