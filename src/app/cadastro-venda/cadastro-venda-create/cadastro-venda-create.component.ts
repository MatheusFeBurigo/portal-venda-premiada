import { Component } from '@angular/core';
import { PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-cadastro-venda-create',
  templateUrl: './cadastro-venda-create.component.html',
  styleUrls: ['./cadastro-venda-create.component.scss']
})
export class CadastroVendaCreateComponent {

  fields: Array<PoDynamicFormField> = [
    {
      property: 'serialNumber',
      label: 'Número de Série',
      required: true,
      placeholder: 'Insira o número de série',
      gridColumns: 12
    },
    {
      property: 'notaFiscal',
      label: 'Nota Fiscal de Venda',
      required: true,
      help: 'Faça o upload da imagem da nota fiscal (formatos permitidos: JPG, PNG, PDF)',
      gridColumns: 12,
      type: 'upload',
      url: 'http://seu-endereco-upload.com'
    }
  ];

  constructor(private poNotification: PoNotificationService) {}

  onSubmit(formData: any) {
    console.log('Dados do formulário:', formData);
    this.poNotification.success('Solicitação criada com sucesso!');
  }
}

