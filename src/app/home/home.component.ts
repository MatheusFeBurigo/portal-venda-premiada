import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuPanelItem } from '@po-ui/ng-components';
import { PoStorageService } from '@po-ui/ng-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent{

  constructor(private router: Router, private storage: PoStorageService) { }

  public readonly menus: Array<PoMenuPanelItem> = [
    {
      label: 'Controle e cadastro de vendas',
      link: './cadastro-venda',
      icon: 'po-icon-finance'
    },
    {
      label: 'Controle do Número de Série',
      link: './controle-num-serie',
      icon: 'po-icon-target'
    },
    {
      label: 'Instruções Gerais',
      link: './instrucoes-gerais',
      icon: 'po-icon-document'
    },
    {
      label: 'Normativa',
      link: './normativa',
      icon: 'po-icon-warning'
    },
    { 
      label: 'Sair', 
      icon: 'po-icon-exit', 
      action: this.logout.bind(this)  }
  ];

  logout(): void {
    this.storage.remove('access_token').then(() => {
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    });
  }  
}
