import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters } from '@po-ui/ng-templates';

@Component({
  selector: 'app-cadastro-venda-view',
  templateUrl: './cadastro-venda-view.component.html',
  styleUrls: ['./cadastro-venda-view.component.sass']
})
export class CadastroVendaViewComponent implements OnInit {

  isHideButton = true;
  pedidosList: Array<any> = new Array();
  colunasTable: Array<any> = new Array();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarCompra() {
    this.router.navigate(['/create']);
}

  public readonly filters: Array<PoPageDynamicSearchFilters> = [
    { label:'Pedido', property: 'CNUMPED', gridColumns: 3 },
    { label:'Data Entrega', property: 'DATPRF',  type: 'date', format: 'dd/mm/yyyy', gridColumns: 3 },
    { label:'Prazo', property: 'CATRAS', gridColumns: 6, optionsMulti: true }
  ];

  columns: Array<PoTableColumn> = [
    { property: 'nome', label: 'Nome solicitante' },
    { property: 'dataSolicitacao', label: 'Data de Solicitação', type: 'date' },
    { property: 'numeroSerie', label: 'Número de Série' },
    { property: 'status', label: 'Status do Item' }
  ];
}
