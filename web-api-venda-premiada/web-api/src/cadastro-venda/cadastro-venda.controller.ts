import { Body, Controller, Post } from '@nestjs/common';
import { CadastroVendaService } from './cadastro-venda.service';

@Controller('cadastro-venda')
export class CadastroVendaController {
  constructor(private cadastroVendaService: CadastroVendaService) {}

  @Post('cadastro-venda')
  async register(@Body() userData: { serialNumber: string; base64Image: string }) {
    const { serialNumber, base64Image } = userData;

    if (!base64Image) {
      throw new Error('Imagem em base64 é obrigatória');
    }

    return this.cadastroVendaService.createCadastroVenda(serialNumber, base64Image);
  }
}
